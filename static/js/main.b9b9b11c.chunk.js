(this["webpackJsonpcovid19-react_dashboard"]=this["webpackJsonpcovid19-react_dashboard"]||[]).push([[0],{186:function(t,e,a){},187:function(t,e,a){},204:function(t,e,a){},205:function(t,e,a){},206:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),o=(a(88),a(89),a(90),a(11)),c=a(13),i=a(14),u=a(10),d=a(20),h=a(19),m=a(208),p=a(209),v=a(210),g=(a(91),a(68)),f={options:{maintainAspectRatio:!1},legend:{display:!0,color:"#fff",position:"bottom",labels:{fontColor:"#fff",fontSize:14,fontWeight:"bold"}}};function E(t){return r.a.createElement("div",{className:"flag-wrapper"},r.a.createElement("img",{className:"country-flag",src:t.flag.flag,alt:t.flag.name})," ",t.flag.name," Statistics")}function C(t){return r.a.createElement("div",{className:"overall-stats"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Total Cases:"),r.a.createElement("th",null,"Active:"),r.a.createElement("th",null,"Recovered:"),r.a.createElement("th",null,"Deaths:")),r.a.createElement("tr",null,r.a.createElement("td",null,t.oldStats.total_cases),r.a.createElement("td",null,t.oldStats.active_cases),r.a.createElement("td",null,t.oldStats.total_recovered),r.a.createElement("td",null,t.oldStats.total_deaths)))))}function b(t){return r.a.createElement("div",{className:"new-stats"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"New Cases:"),r.a.createElement("th",null,"New Deaths:"),r.a.createElement("th",null,"Critical:"),r.a.createElement("th",null,"Cases per million:")),r.a.createElement("tr",null,r.a.createElement("td",null,t.newStats.new_cases),r.a.createElement("td",null,t.newStats.new_deaths),r.a.createElement("td",null,t.newStats.serious_critical),r.a.createElement("td",null,t.isWorldStats?t.newStats.total_cases_per_1m_population:t.newStats.total_cases_per1m)))))}var y=function(t){return r.a.createElement("div",{className:"stats-component"},r.a.createElement("div",{className:"title-div"},t.isWorldStats?"World Statistics":r.a.createElement(E,{flag:t.countryStats})),r.a.createElement("div",{className:"graph-div"},r.a.createElement(g.a,{data:t.world,legend:f.legend,width:250,height:250,options:f.options})),r.a.createElement(C,{oldStats:t.worldStats}),r.a.createElement(b,{newStats:t.worldStats,isWorldStats:t.isWorldStats}))},w=(a(186),a(78)),S=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).handleChange=function(e){t.setState({selectedOption:e}),t.props.handleChangeEvent(e.value)},t.state={selectedOption:{value:"CAN",label:"Canada"}},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t}return Object(i.a)(a,[{key:"generateCountryOptions",value:function(){var t=[];return this.props.optionValues.forEach((function(e){t.push({value:e.alpha3Code,label:e.name})})),t}},{key:"render",value:function(){var t=this.generateCountryOptions();return r.a.createElement("div",{className:"select-wrapper"},r.a.createElement(w.a,{value:this.state.selectedOption,onChange:this.handleChange,options:t}))}}]),a}(r.a.Component),_=a(211),D=(a(187),a(71)),N=a.n(D),k=a(72),O=a.n(k),j=a(73),W=a.n(j),A=a(74),L=a.n(A);var x=function(t){return r.a.createElement("div",{className:"sub-heading-wrapper"},r.a.createElement("div",{className:"sub-heading"},"Protect Protect yourself and others from getting sick"),r.a.createElement("div",{className:"carousel-wrapper"},r.a.createElement(_.a,null,r.a.createElement(_.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:N.a,alt:"Corona Awareness"})),r.a.createElement(_.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:O.a,alt:"Corona Awareness"})),r.a.createElement(_.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:W.a,alt:"Corona Awareness"})),r.a.createElement(_.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:L.a,alt:"Corona Awareness"})))))},V=a(29),I=a.n(V),T={headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"188aae29ccmsh760576013171a02p149d6djsnf9834a9451ef"}},U={baseUrl:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/",coronaStatus:{getWorldData:"worldstat.php",getCountryData:"latest_stat_by_iso_alpha_3.php",getCountryList:"affected.php"}},B={baseUrl:"https://restcountries.eu/rest/v2/all"},J=U.baseUrl,R=T,F=B.baseUrl,P=function(){function t(){Object(c.a)(this,t)}return Object(i.a)(t,[{key:"getWorldUpdate",value:function(){var t=J+U.coronaStatus.getWorldData;return I.a.get(t,R)}},{key:"getDataByCountryName",value:function(t){var e=J+U.coronaStatus.getCountryData+"?alpha3="+t;return I.a.get(e,R)}},{key:"getCountryList",value:function(){return I.a.get(F)}}]),t}(),z=(a(204),new P),M=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).handleChangeEvent=t.handleChangeEvent.bind(Object(u.a)(t)),t}return Object(i.a)(a,[{key:"handleChangeEvent",value:function(t){this.props.handleChangeEvent(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"chart-container"},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(v.a,{xs:12,md:6,lg:6},r.a.createElement(y,{isWorldStats:!0,worldStats:this.props.graphData.world,world:this.props.graphData.worldChartData})),r.a.createElement(v.a,{md:6,xs:12,lg:6,className:"country-chart"},r.a.createElement(y,{isWorldStats:!1,countryStats:this.props.graphData.countryDetails,worldStats:this.props.graphData.country,world:this.props.graphData.countryChartData}),this.props.graphData.countryList.length?r.a.createElement(S,{handleChangeEvent:this.handleChangeEvent,optionValues:this.props.graphData.countryList}):""))),r.a.createElement(x,null),r.a.createElement("div",{className:"stats-taken-time"},r.a.createElement("div",{className:"api-updated-time"},r.a.createElement("b",null,"Stats taken at:")," ",this.props.graphData.world.statistic_taken_at," IST"),r.a.createElement("div",{className:"api-credits"},r.a.createElement("b",null,"Data Credits: "),r.a.createElement("a",{href:"https://rapidapi.com/astsiatsko/api/coronavirus-monitor"},"Coronavirus monitor by astsiatsko"))))}}]),a}(r.a.Component),$=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={isLoaded:!1,countryList:[],defaultCountry:"Canada",world:{total_cases:"",active_cases:"",total_deaths:"",total_recovered:"",new_cases:"",new_deaths:"",serious_critical:"",total_cases_per_1m_population:""},countryDetails:{},country:{total_cases:"",active_cases:"",total_deaths:"",total_recovered:"",new_cases:"",new_deaths:"",serious_critical:"",total_cases_per1m:""},worldChartData:{datasets:[{data:[],backgroundColor:["#007bff","#28a745","#dc3545"]}],labels:["Active","Recovered","Death"]},countryChartData:{datasets:[{data:[],backgroundColor:["#007bff","#28a745","#dc3545"]}],labels:["Active","Recovered","Death"]}},t.getWorldCoronaStats=t.getWorldCoronaStats.bind(Object(u.a)(t)),t.assignStateValues=t.assignStateValues.bind(Object(u.a)(t)),t.handleChangeEvent=t.handleChangeEvent.bind(Object(u.a)(t)),t}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"covid-status"},r.a.createElement(M,{handleChangeEvent:this.handleChangeEvent,graphData:this.state}))}},{key:"componentDidMount",value:function(){this.getCoronaAffectedCountryList()}},{key:"convertStringToNumber",value:function(t){return t=t.replace(/\,/g,""),t=Number(t)}},{key:"createDataArray",value:function(t){var e=[];return e.push(this.convertStringToNumber(t.active_cases)),e.push(this.convertStringToNumber(t.total_recovered)),e.push(this.convertStringToNumber(t.total_deaths)),e}},{key:"countryDetailsFromJSON",value:function(t,e){return t.find((function(t){return t.name===e}))}},{key:"assignStateValues",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"world",a=arguments.length>1?arguments[1]:void 0;if("world"===e){var n=this.createDataArray(a);this.setState((function(t){return Object(o.a)({},t,{world:a,worldChartData:Object(o.a)({},t.worldChartData.labels,{datasets:[Object(o.a)({},t.worldChartData.datasets[0].backgroundColor,{data:n})]})})}))}else if("list"===e){var r=this.countryDetailsFromJSON(a,this.state.defaultCountry);this.setState((function(t){return Object(o.a)({},t,{countryDetails:r,countryList:a})}))}else this.setState((function(e){var n=t.createDataArray(a);return Object(o.a)({},e,{isLoaded:!0,country:a,countryChartData:Object(o.a)({},e.countryChartData.labels,{datasets:[Object(o.a)({},e.countryChartData.datasets[0].backgroundColor,{data:n})]})})}))}},{key:"handleChangeEvent",value:function(t){var e=this.state.countryList.find((function(e){return e.alpha3Code===t}));this.setState((function(t){return Object(o.a)({},t,{countryDetails:e,defaultCountry:e.name})})),this.getCountryCoronaStats(t)}},{key:"getWorldCoronaStats",value:function(){var t=this;z.getWorldUpdate().then((function(e){t.assignStateValues("world",e.data),t.getCountryCoronaStats(t.state.countryDetails.alpha3Code)})).catch((function(t){console.log(t)}))}},{key:"getCountryCoronaStats",value:function(t){var e=this;z.getDataByCountryName(t).then((function(a){e.assignStateValues(t,a.data.latest_stat_by_country[0])})).catch((function(t){console.log(t)}))}},{key:"getCoronaAffectedCountryList",value:function(){var t=this;z.getCountryList().then((function(e){t.assignStateValues("list",e.data),t.getWorldCoronaStats()})).catch((function(t){console.log(t)}))}}]),a}(r.a.Component);a(205);var q=function(){return r.a.createElement("div",{className:"covid-header"},r.a.createElement("div",{className:"title"},"Covid-19 Dashboard",r.a.createElement("div",{className:"under-line"})))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},71:function(t,e,a){t.exports=a.p+"static/media/1.8f95c346.png"},72:function(t,e,a){t.exports=a.p+"static/media/2.7bca717f.png"},73:function(t,e,a){t.exports=a.p+"static/media/3.3fd044dc.png"},74:function(t,e,a){t.exports=a.p+"static/media/4.00f14d54.png"},83:function(t,e,a){t.exports=a(206)},89:function(t,e,a){},90:function(t,e,a){},91:function(t,e,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.b9b9b11c.chunk.js.map