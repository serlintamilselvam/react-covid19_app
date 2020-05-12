import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import StatsComponent from './StatsComponent'
import CountrySelect from '../CountrySelect/CountrySelect'
import AwarenessCarousel from '../AwarenessCarousel/AwarenessCarousel'
import StatsAPI from './StatsAPI'
import './StatsContainer.scss'
const statsObj = new StatsAPI()


class ChartContainer extends React.Component {

    constructor() {
        super()
        this.handleChangeEvent = this.handleChangeEvent.bind(this)
    }


    handleChangeEvent(alpha3Code) {
        this.props.handleChangeEvent(alpha3Code)
    }

    render() {
        return (
            <div className="chart-container">
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <StatsComponent 
                                isWorldStats={true} 
                                worldStats={this.props.graphData.world} 
                                world={this.props.graphData.worldChartData} 
                            />
                        </Col>
                        <Col md={6} xs={12} lg={6} className="country-chart">
                            <StatsComponent 
                                isWorldStats={false} 
                                countryStats={this.props.graphData.countryDetails} 
                                worldStats={this.props.graphData.country} 
                                world={this.props.graphData.countryChartData} 
                            />
                            { (this.props.graphData.countryList.length) ? 
                                <CountrySelect handleChangeEvent={this.handleChangeEvent} optionValues={this.props.graphData.countryList} /> : 
                                '' 
                            }
                        </Col>
                    </Row>
                </Container>
                <AwarenessCarousel />
                <div className="stats-taken-time">
                    <div className="api-updated-time">
                        <b>Stats taken at:</b> {this.props.graphData.world.statistic_taken_at} IST
                    </div>
                    <div className="api-credits">
                        <b>Data Credits: </b> 
                            <a href="https://rapidapi.com/astsiatsko/api/coronavirus-monitor">Coronavirus monitor by astsiatsko</a>
                    </div>
                </div>
            </div>
    
        )
    }
}


class StatsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoaded: false,
            countryList: [],
            defaultCountry: 'Canada',
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
        this.handleChangeEvent = this.handleChangeEvent.bind(this)
    }

    render() {
        return (
            <div className="covid-status">
                <ChartContainer handleChangeEvent={this.handleChangeEvent} graphData={this.state} />
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

    countryDetailsFromJSON(countryList,defaultCountryName) {
        return countryList.find(element => element.name === defaultCountryName)
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

            var foundCountry = this.countryDetailsFromJSON(data,this.state.defaultCountry)
            this.setState((previousState) => {
                return {
                    ...previousState,
                    countryDetails: foundCountry,
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

    handleChangeEvent(alpha3Code) {
        const returnedJSON = this.state.countryList.find(element => element.alpha3Code === alpha3Code)
        this.setState((previousState) => {
            return {
                ...previousState,
                countryDetails: returnedJSON,
                defaultCountry: returnedJSON.name
            }
        })
        this.getCountryCoronaStats(alpha3Code)
    }

    getWorldCoronaStats() {
        statsObj.getWorldUpdate()
            .then((response) => {
                this.assignStateValues('world', response.data)
                this.getCountryCoronaStats(this.state.countryDetails.alpha3Code)
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

export default StatsContainer