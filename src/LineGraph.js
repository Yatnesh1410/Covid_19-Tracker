import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function LineGraph({ casesType, ...props }) {
  const [finalData, setFinalData] = useState({});
  const [covidLGData, setCovidLGData] = useState({});
  const [vaccineLGData, setVaccineLGData] = useState({});
  const [lineGraphData, setLineGraphData] = useState();

  const getLGData = () => {
    if (covidLGData && vaccineLGData) {
      let LGData = {
        cases: covidLGData.cases,
        deaths: covidLGData.deaths,
        recovered: covidLGData.recovered,
        vaccinated: vaccineLGData,
      };

      setLineGraphData(LGData);
    }
  };

  const buildChartData = (lineGraphData, casesType) => {
    let chartData = [];
    let lastDataPoint;

    {
      for (let date in lineGraphData.cases) {
        if (lastDataPoint) {
          let newDataPoint = {
            x: date,
            y: lineGraphData[casesType][date] - lastDataPoint,
          };
          chartData.push(newDataPoint);
        }
        lastDataPoint = lineGraphData[casesType][date];
      }
      return chartData;
    }
  };

  const getCovidLGData = async()=>{
    await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setCovidLGData(data);
      });
  }

  const getVaccineLGData = async()=>{
    await fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=120&fullData=false"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setVaccineLGData(data);
      });
  }


  useEffect(() => {
    getCovidLGData();
    getVaccineLGData();
    getLGData();
    if (lineGraphData) {
      const chartData = buildChartData(lineGraphData, casesType);
      setFinalData(chartData);
    }
  }, [casesType]);

  return (
    <div className={props.className}>
      {finalData?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                data: finalData,
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
