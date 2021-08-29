(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},201:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(8),r=c.n(s),o=(c(93),c(12)),i=c.n(o),u=c(20),l=c(7),d=c(237),f=c(238),j=c(239),h=c(228),b=c(232),v=c(2),p=(c(62),c(233)),x=c(3);var O=function(e){var t=e.title,c=e.isRed,n=e.isGreen,a=e.isGrey,s=e.isBlue,r=e.cases,o=e.active,i=e.total,u=Object(v.a)(e,["title","isRed","isGreen","isGrey","isBlue","cases","active","total"]);return Object(x.jsx)(h.a,{onClick:u.onClick,className:"infobox ".concat(o&&"infobox--selected"," ").concat(c&&"infobox__cases--red"," \n      ").concat(n&&"infobox__cases--green"," \n      ").concat(a&&"infobox__cases--grey"," ").concat(s&&"infobox__cases--blue"," "),children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(p.a,{className:"infobox__title",color:"textSecondary",children:t}),Object(x.jsx)("h2",{className:"infobox__cases ".concat(c&&"infobox__cases--red"," \n          ").concat(n&&"infobox__cases--green"," \n          ").concat(a&&"infobox__cases--grey"," ").concat(s&&"infobox__cases--blue"," "),children:u.isloading?Object(x.jsx)("i",{className:"fa fa-cog fa-spin fa-fw"}):r}),Object(x.jsxs)(p.a,{className:"infobox__total",color:"textSecondary",children:[i," Total"]})]})})},m=(c(100),c(235)),y=c(236),g=c(241),_=c(16),w=c(240),k=c(234),N=c(15),C=c.n(N),S={cases:{hex:"#CC1034",multiplier:400},recovered:{hex:"#7DD71D",multiplier:400},deaths:{hex:"grey",multiplier:800},vaccinated:{hex:"#0000ff",multiplier:50}},D=function(e){return Object(_.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},I=function(e,t){return e.map((function(e){return Object(x.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:S[t].hex,fillColor:S[t].hex},radius:Math.sqrt(e[t])*S[t].multiplier,children:Object(x.jsx)(k.a,{children:Object(x.jsxs)("div",{className:"info-container",children:[Object(x.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(x.jsx)("div",{className:"info-name",children:e.country}),Object(x.jsxs)("div",{className:"info-confirmed",children:["Cases: ",C()(e.cases).format("0,0")]}),Object(x.jsxs)("div",{className:"info-recovered",children:["Recovered: ",C()(e.recovered).format("0,0")]}),Object(x.jsxs)("div",{className:"info-deaths",children:["Deaths: ",C()(e.deaths).format("0,0")]}),Object(x.jsxs)("div",{className:"info-vaccinated",children:["Vaccinated: ",C()(e.vaccinated).format("0,0")]})]})})})}))},T=function(e){return e?"+".concat(C()(e).format("0.0a")):"+0"};var R=function(e){var t=e.casesType,c=e.countries,n=e.center,a=e.zoom;function s(e){var t=e.center,c=e.zoom;return Object(m.a)().setView(t,c),null}return Object(x.jsxs)(y.a,{casesType:t,className:"map",center:n,zoom:a,scrollWheelZoom:!1,children:[Object(x.jsx)(s,{center:n,zoom:a}),Object(x.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),I(c,t)]})};c(101);var z=function(e){var t=e.countries;return Object(x.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t}),Object(x.jsx)("td",{children:Object(x.jsx)("strong",{children:C()(c).format("000,000")})})]})}))})},G=(c(102),c(82)),B={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return C()(e).format("0a")}}}]}};var F=function(e){var t=e.casesType,c=Object(v.a)(e,["casesType"]),a=Object(n.useState)({}),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)({}),f=Object(l.a)(d,2),j=f[0],h=f[1],b=Object(n.useState)({}),p=Object(l.a)(b,2),O=p[0],m=p[1],y=Object(n.useState)(),g=Object(l.a)(y,2),_=g[0],w=g[1],k=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){h(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=120&fullData=false").then((function(e){return e.json()})).then((function(e){m(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(k(),N(),function(){if(j&&O){var e={cases:j.cases,deaths:j.deaths,recovered:j.recovered,vaccinated:O};w(e)}}(),_){var e=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n}(_,t);o(e)}}),[t]),Object(x.jsx)("div",{className:c.className,children:(null===r||void 0===r?void 0:r.length)>0&&Object(x.jsx)(G.Line,{options:B,data:{datasets:[{data:r,backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034"}]}})})};c(199);var L=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("worldwide"),r=Object(l.a)(s,2),o=r[0],v=r[1],p=Object(n.useState)({}),m=Object(l.a)(p,2),y=m[0],g=m[1],_=Object(n.useState)({}),w=Object(l.a)(_,2),k=w[0],N=w[1],C=Object(n.useState)([]),S=Object(l.a)(C,2),I=S[0],G=S[1],B=Object(n.useState)([]),L=Object(l.a)(B,2),M=L[0],A=L[1],E=Object(n.useState)([34.80746,-40.4796]),V=Object(l.a)(E,2),W=V[0],J=V[1],P=Object(n.useState)(3),Y=Object(l.a)(P,2),q=Y[0],K=Y[1],Z=Object(n.useState)("cases"),H=Object(l.a)(Z,2),Q=H[0],U=H[1],X=Object(n.useState)(!1),$=Object(l.a)(X,2),ee=$[0],te=$[1],ce=Object(n.useState)([]),ne=Object(l.a)(ce,2),ae=ne[0],se=ne[1],re=Object(n.useState)([]),oe=Object(l.a)(re,2),ie=oe[0],ue=oe[1];Object(n.useEffect)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}));case 2:return e.next=4,fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true").then((function(e){return e.json()})).then((function(e){N(e[0])}));case 4:le(),de(),fe();case 7:case"end":return e.stop()}}),e)}))),[Q]);var le=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=D(e);G(c),se(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=true").then((function(e){return e.json()})).then((function(e){ue(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(u.a)(i.a.mark((function e(){var t,c,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ae||!ie){e.next=17;break}t=[],c=0;case 3:if(!(c<(null===ae||void 0===ae?void 0:ae.length))){e.next=16;break}n=0;case 5:if(!(n<(null===ie||void 0===ie?void 0:ie.length))){e.next=13;break}if(ae[c].country!==ie[n].country){e.next=10;break}return a={country:ae[c].country,countryInfo:ae[c].countryInfo,cases:ae[c].cases,recovered:ae[c].recovered,deaths:ae[c].deaths,vaccinated:ie[n].timeline[0].total},t.push(a),e.abrupt("break",13);case 10:n++,e.next=5;break;case 13:c++,e.next=3;break;case 16:A(t);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(u.a)(i.a.mark((function e(t){var c,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(M),te(!0),c=t.target.value,v(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=7,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),g(e),te(!1),J("worldwide"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),K(3)}));case 7:return a="worldwide"===c?"https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=2&fullData=true":"https://disease.sh/v3/covid-19/vaccine/coverage/countries/".concat(c,"?lastdays=2&fullData=true"),e.next=10,fetch(a).then((function(e){return e.json()})).then((function(e){N("worldwide"===c?e[0]:e.timeline[0])}));case 10:console.log(y),console.log(k);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("div",{className:"app__left",children:[Object(x.jsxs)("div",{className:"app__header",children:[Object(x.jsx)("h1",{children:" COVID-19 TRACKER"}),Object(x.jsx)(d.a,{className:"app__dropdown",children:Object(x.jsxs)(f.a,{variant:"outlined",onChange:je,value:o,children:[Object(x.jsx)(j.a,{value:"worldwide",children:" Worldwide "}),c.map((function(e){return Object(x.jsx)(j.a,{value:e.value,children:e.name})}))]})})]}),Object(x.jsxs)("div",{className:"app__stats",children:[Object(x.jsx)(O,{isRed:!0,active:"cases"===Q,className:"infobox__cases",onClick:function(e){U("cases")},title:"Coronavirus Cases",cases:T(y.todayCases),total:T(y.cases),isloading:ee}),Object(x.jsx)(O,{isGreen:!0,active:"recovered"===Q,className:"infobox__recovered",onClick:function(e){U("recovered")},title:"Recovered",cases:T(y.todayRecovered),total:T(y.recovered),isloading:ee}),Object(x.jsx)(O,{isGrey:!0,active:"deaths"===Q,className:"infobox__deaths",onClick:function(e){U("deaths")},title:"Deaths",cases:T(y.todayDeaths),total:T(y.deaths),isloading:ee}),Object(x.jsx)(O,{isBlue:!0,active:"vaccinated"===Q,className:"infobox__cases",onClick:function(e){U("vaccinated")},title:"Vaccination Stats",cases:T(k.daily),total:T(k.total),isloading:ee})]}),Object(x.jsx)(R,{casesType:Q,countries:M,center:W,zoom:q})]}),Object(x.jsx)(h.a,{className:"app__right",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)("h3",{children:"Live Cases by Country "}),Object(x.jsx)(z,{countries:I}),Object(x.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide New ",Q," "]}),Object(x.jsx)(F,{className:"app__graph",casesType:Q})]})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,243)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),M()},62:function(e,t,c){},93:function(e,t,c){}},[[201,1,2]]]);
//# sourceMappingURL=main.41358595.chunk.js.map