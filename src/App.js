import {
  MenuItem,
  Select,
  FormControl,
  Card,
  CardContent,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Infobox from "./infobox";
import Map from "./Map";
import Table from "./table";
import { sortData, prettyPrintStat } from "./_util";
import "./App.css";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import "./infobox.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [vaccinationInfo, setVaccinationInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [casesType, setCasesType] = useState("cases");
  const [isLoading, setLoading] = useState(false);
  const [mapDataCountries, setMapDataCountries] = useState([]);
  const [mapDataCountriesVaccination, setMapDataCountriesVaccination] =
    useState([]);

  //initial data display
  useEffect(async () => {
    await fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });

    await fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setVaccinationInfo(data[0]);
      });

      getCountriesData();
      getCountriesVaccinationData();
      getMapCountries();
  }, [casesType]);


  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapDataCountries(data);
        setCountries(countries);
      });
  };

  const getCountriesVaccinationData = async () => {
    await fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setMapDataCountriesVaccination(data);
      });
  };

  const getMapCountries = async () => {
    if (mapDataCountries && mapDataCountriesVaccination) {
      let mapData = [];
      for (var i = 0; i < mapDataCountries?.length; i++) {
        for (var j = 0; j < mapDataCountriesVaccination?.length; j++) {
          if (
            mapDataCountries[i].country ===
            mapDataCountriesVaccination[j].country
          ) {
            let dataForMap = {
              country: mapDataCountries[i].country,
              countryInfo: mapDataCountries[i].countryInfo,
              cases: mapDataCountries[i].cases,
              recovered: mapDataCountries[i].recovered,
              deaths: mapDataCountries[i].deaths,
              vaccinated: mapDataCountriesVaccination[j].timeline[0].total,
            };

            mapData.push(dataForMap);
            break;
          }
        }
      }

      setMapCountries(mapData);
    }
  };

  // chnaging countries
  const onCountryChange = async (event) => {
    console.log(mapCountries);
    setLoading(true);
    const countryCode = event.target.value;

    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setLoading(false);

        countryCode === "worldwide"
          ? setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(3);
      });

    const vaccineUrl =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true"
        : `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countryCode}?lastdays=2&fullData=true`;

    await fetch(vaccineUrl)
      .then((response) => response.json())
      .then((data) => {
        if (countryCode === "worldwide") {
          setVaccinationInfo(data[0]);
        } else {
          setVaccinationInfo(data.timeline[0]);
        }
      });

    console.log(countryInfo);
    console.log(vaccinationInfo);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1> COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide"> Worldwide </MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox
            isRed
            active={casesType === "cases"}
            className="infobox__cases"
            onClick={(e) => {
              setCasesType("cases");
            }}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
            isloading={isLoading}
          />
          <Infobox
            isGreen
            active={casesType === "recovered"}
            className="infobox__recovered"
            onClick={(e) => {
              setCasesType("recovered");
            }}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
            isloading={isLoading}
          />
          <Infobox
            isGrey
            active={casesType === "deaths"}
            className="infobox__deaths"
            onClick={(e) => {
              setCasesType("deaths");
            }}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
            isloading={isLoading}
          />
          <Infobox
            isBlue
            active={casesType === "vaccinated"}
            className="infobox__cases"
            onClick={(e) => {
              setCasesType("vaccinated");
            }}
            title="Vaccination Stats"
            cases={prettyPrintStat(vaccinationInfo.daily)}
            total={prettyPrintStat(vaccinationInfo.total)}
            isloading={isLoading}
          />
        </div>

          <Map
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country </h3>
          <Table countries={tableData} />

          <h3 className="app__graphTitle">Worldwide New {casesType} </h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
