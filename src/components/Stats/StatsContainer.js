import React from 'react'
// import { geolocated } from "react-geolocated";
import RiseLoader from 'react-spinners/RiseLoader'
import {Container, Row, Col} from 'react-bootstrap'
import StatsComponent from './StatsComponent'
import StatsAPI from './StatsAPI'
const statsObj = new StatsAPI()

function OverLayLoader(props) {
    return (
        <div className="overlay-loader">
            <div className="loader-wrapper">
                <RiseLoader
                    size={30}
                    color={"#24B997"}
                    loading={props.loading}
                />
            </div>
        </div>
    )
}

function ChartContainer(props) {
    return (
        <div className="chart-container">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <StatsComponent 
                            isWorldStats={true} 
                            worldStats={props.graphData.world} 
                            world={props.graphData.worldChartData} 
                        />
                    </Col>
                    <Col md={6} xs={12} lg={6}>
                        <StatsComponent 
                            isWorldStats={false} 
                            countryStats={props.graphData.countryDetails} 
                            worldStats={props.graphData.country} 
                            world={props.graphData.countryChartData} 
                        />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

class StatsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            countryList: [],
            defaultCountry: 'India',
            world : {
                total_cases: '',
                active_cases: '',
                total_deaths: '',
                total_recovered: '',
                new_cases: '',
                new_deaths: '',
                serious_critical: '',
                total_cases_per_1m_population: ''
            },
            countryDetails: {},
            countryName: 'IN',
            country: {
                total_cases: '',
                active_cases: '',
                total_deaths: '',
                total_recovered: '',
                new_cases: '',
                new_deaths: '',
                serious_critical: '',
                total_cases_per1m: ''
            },
            worldChartData: {
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#007bff', '#28a745', '#dc3545']
                    }
                ],
                labels: ['Active','Recovered','Death']
            },
            countryChartData: {
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#007bff', '#28a745', '#dc3545']
                    }
                ],
                labels: ['Active','Recovered','Death']
            }
        }
        this.getWorldCoronaStats = this.getWorldCoronaStats.bind(this)
        this.assignStateValues = this.assignStateValues.bind(this)
    }

    render() {
        return (
            <div className="covid-status">
                {/* <OverLayLoader loading={!this.state.isLoaded} /> */}
                <ChartContainer graphData={this.state} />
                {/* {(this.state.isLoaded) ? <ChartContainer graphData={this.state} /> : "" } */}
            </div>
        )
    }

    componentDidMount() {
        this.getCoronaAffectedCountryList()
    }

    convertStringToNumber(str) {
        str = str.replace(/\,/g,'')
        str = Number(str)
        return str
    }

    createDataArray(statsArray) {
        var worldPieChart = []
        worldPieChart.push(this.convertStringToNumber(statsArray.active_cases))
        worldPieChart.push(this.convertStringToNumber(statsArray.total_recovered))
        worldPieChart.push(this.convertStringToNumber(statsArray.total_deaths))
        return worldPieChart
    }

    countyDetailsFromJSON(countryList,countryName) {
        return countryList.find(element => element.name === countryName)
    }

    assignStateValues(str='world',data) {
        if(str === 'world') {
            var pieChartData = this.createDataArray(data)
            this.setState((previousState) => {
                return {
                    ...previousState,
                    world: data,
                    worldChartData: {
                        ...previousState.worldChartData.labels,
                        datasets: [{
                            ...previousState.worldChartData.datasets[0].backgroundColor,
                            data: pieChartData,
                        }]
                    }
                }
            })
        } else if (str === 'list') {

            var foundCounrty = this.countyDetailsFromJSON(data,this.state.defaultCountry)
            this.setState((previousState) => {
                return {
                    ...previousState,
                    countryDetails: foundCounrty,
                    countryList: data
                }
            })
        } else {
            this.setState((previousState) => {
                var pieChartData = this.createDataArray(data)
                return {
                    ...previousState,
                    isLoaded: true,
                    country: data,
                    countryChartData: {
                        ...previousState.countryChartData.labels,
                        datasets: [{
                            ...previousState.countryChartData.datasets[0].backgroundColor,
                            data: pieChartData,
                        }]
                    }
                }
            })
        }
    }

    getWorldCoronaStats() {
        statsObj.getWorldUpdate()
            .then((response) => {
                this.assignStateValues('world', response.data)
                this.getCountryCoronaStats(this.state.countryDetails.name)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getCountryCoronaStats(countryName) {
        statsObj.getDataByCountryName(countryName)
            .then((response) => {
                this.assignStateValues(countryName, response.data.latest_stat_by_country[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getCoronaAffectedCountryList() {
        statsObj.getCountryList()
            .then((response) => {
                this.assignStateValues('list',response.data)
                this.getWorldCoronaStats()
            })
            .catch((error) => {
                console.log(error)
            })
    }

}

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(StatsContainer);

export default StatsContainer