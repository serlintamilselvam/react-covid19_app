(this["webpackJsonpcovid19-react_dashboard"]=this["webpackJsonpcovid19-react_dashboard"]||[]).push([[0],{184:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(59),l=a.n(o),s=(a(70),a(71),a(72),a(6)),c=a(22),i=a(23),u=a(15),d=a(64),h=a(63),m=a(186),v=a(187),f=a(188),g=(a(73),a(60)),p={options:{maintainAspectRatio:!1},legend:{display:!0,color:"#fff",position:"bottom",labels:{fontColor:"#fff",fontSize:14,fontWeight:"bold"}}};var y=function(t){return n.a.createElement("div",{className:"stats-component"},n.a.createElement("div",{className:"title-div"},t.statsTopic," Statistics"),n.a.createElement("div",{className:"graph-div"},n.a.createElement(g.a,{data:t.world,legend:p.legend,width:300,height:300,options:p.options})),n.a.createElement("div",{className:"overall-stats"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Total Cases:"),n.a.createElement("th",null,"Active:"),n.a.createElement("th",null,"Recovered:"),n.a.createElement("th",null,"Deaths:")),n.a.createElement("tr",null,n.a.createElement("td",null,t.worldStats.total_cases),n.a.createElement("td",null,t.worldStats.active_cases),n.a.createElement("td",null,t.worldStats.total_recovered),n.a.createElement("td",null,t.worldStats.total_deaths))))),n.a.createElement("div",{className:"new-stats"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"New Cases:"),n.a.createElement("th",null,"New Deaths:"),n.a.createElement("th",null,"Critical:"),n.a.createElement("th",null,"Cases per million:")),n.a.createElement("tr",null,n.a.createElement("td",null,t.worldStats.new_cases),n.a.createElement("td",null,t.worldStats.new_deaths),n.a.createElement("td",null,t.worldStats.serious_critical),n.a.createElement("td",null,"World"===t.statsTopic?t.worldStats.total_cases_per_1m_population:t.worldStats.total_cases_per1m))))))},b=a(24),w=a.n(b),_={baseUrl:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/",headerParameters:{headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"188aae29ccmsh760576013171a02p149d6djsnf9834a9451ef"}},coronaStatus:{getWorldData:"worldstat.php",getCountryData:"latest_stat_by_country.php",getCountryList:"affected.php"}},E=_.baseUrl,C=_.headerParameters,S=new(function(){function t(){Object(c.a)(this,t)}return Object(i.a)(t,[{key:"getWorldUpdate",value:function(){var t=E+_.coronaStatus.getWorldData;return w.a.get(t,C)}},{key:"getDataByCountryName",value:function(t){var e=E+_.coronaStatus.getCountryData+"?country="+t;return w.a.get(e,C)}},{key:"getCountryList",value:function(){var t=E+_.coronaStatus.getCountryList;return w.a.get(t,C)}}]),t}()),D=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={countryList:[],world:{total_cases:"",active_cases:"",total_deaths:"",total_recovered:"",new_cases:"",new_deaths:"",serious_critical:"",total_cases_per_1m_population:""},countryName:"India",country:{total_cases:"",active_cases:"",total_deaths:"",total_recovered:"",new_cases:"",new_deaths:"",serious_critical:"",total_cases_per1m:""},worldChartData:{datasets:[{data:[],backgroundColor:["#007bff","#28a745","#dc3545"]}],labels:["Active","Recovered","Death"]},countryChartData:{datasets:[{data:[],backgroundColor:["#007bff","#28a745","#dc3545"]}],labels:["Active","Recovered","Death"]}},t.getWorldCoronaStats=t.getWorldCoronaStats.bind(Object(u.a)(t)),t.assignStateValues=t.assignStateValues.bind(Object(u.a)(t)),t}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"covid-status"},n.a.createElement(m.a,null,n.a.createElement(v.a,null,n.a.createElement(f.a,{xs:12,md:6,lg:6},n.a.createElement(y,{statsTopic:"World",worldStats:this.state.world,world:this.state.worldChartData})),n.a.createElement(f.a,{md:6,xs:12,lg:6},n.a.createElement(y,{statsTopic:this.state.countryName,worldStats:this.state.country,world:this.state.countryChartData})))))}},{key:"componentDidMount",value:function(){this.getCoronaAffectedCountryList()}},{key:"convertStringToNumber",value:function(t){return t=t.replace(/\,/g,""),t=Number(t)}},{key:"createDataArray",value:function(t){var e=[];return e.push(this.convertStringToNumber(t.active_cases)),e.push(this.convertStringToNumber(t.total_recovered)),e.push(this.convertStringToNumber(t.total_deaths)),e}},{key:"assignStateValues",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"world",a=arguments.length>1?arguments[1]:void 0;if("world"===e){var r=this.createDataArray(a);this.setState((function(t){return Object(s.a)({},t,{world:a,worldChartData:Object(s.a)({},t.worldChartData.labels,{datasets:[Object(s.a)({},t.worldChartData.datasets[0].backgroundColor,{data:r})]})})}))}else"list"===e?this.setState((function(t){return Object(s.a)({},t,{countryList:a})})):this.setState((function(e){var r=t.createDataArray(a);return Object(s.a)({},e,{country:a,countryChartData:Object(s.a)({},e.countryChartData.labels,{datasets:[Object(s.a)({},e.countryChartData.datasets[0].backgroundColor,{data:r})]})})}))}},{key:"getWorldCoronaStats",value:function(){var t=this;S.getWorldUpdate().then((function(e){t.assignStateValues("world",e.data),t.getCountryCoronaStats(t.state.countryName)})).catch((function(t){console.log(t)}))}},{key:"getCountryCoronaStats",value:function(t){var e=this;S.getDataByCountryName(t).then((function(a){e.assignStateValues(t,a.data.latest_stat_by_country[0])})).catch((function(t){console.log(t)}))}},{key:"getCoronaAffectedCountryList",value:function(){var t=this;S.getCountryList().then((function(e){var a=e.data.affected_countries.filter((function(t){return""!==t}));t.assignStateValues("list",a),t.getWorldCoronaStats()})).catch((function(t){console.log(t)}))}}]),a}(n.a.Component);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},65:function(t,e,a){t.exports=a(184)},71:function(t,e,a){},72:function(t,e,a){},73:function(t,e,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.fbcb989c.chunk.js.map