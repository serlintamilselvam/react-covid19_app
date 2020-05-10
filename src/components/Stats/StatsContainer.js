import React from 'react'
// import { geolocated } from "react-geolocated";
import {Container, Row, Col} from 'react-bootstrap'
import StatsComponent from './StatsComponent'
import StatsAPI from './StatsAPI'
const statsObj = new StatsAPI()

class StatsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            countryList: [],
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
            countryName: 'India',
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
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <StatsComponent statsTopic='World' worldStats={this.state.world} world={this.state.worldChartData} />
                        </Col>
                        <Col md={6} xs={12} lg={6}>
                            <StatsComponent statsTopic={this.state.countryName} worldStats={this.state.country} world={this.state.countryChartData} />
                        </Col>
                    </Row>
                </Container>
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
            this.setState((previousState) => {
                return {
                    ...previousState,
                    countryList: data
                }
            })
        } else {
            this.setState((previousState) => {
                var pieChartData = this.createDataArray(data)
                return {
                    ...previousState,
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
                this.getCountryCoronaStats(this.state.countryName)
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
                var filtered = response.data.affected_countries.filter((el) => el !== '')
                this.assignStateValues('list',filtered)
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