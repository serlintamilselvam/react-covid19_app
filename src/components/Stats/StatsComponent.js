import React from 'react'
import './StatsComponent.scss'
import { Pie } from 'react-chartjs-2'
// import { geolocated } from 'react-geolocated'

const pieChartOptions = {
    options: {
        maintainAspectRatio: false
    },
    legend: {
        display: true,
        color: '#fff',
        position: 'bottom',
        labels: {
            fontColor: '#fff',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
}

function FlagComponent(props) {
    return (
        <div className="flag-wrapper">
            <img className="country-flag" src={props.flag.flag} alt={props.flag.name} /> {props.flag.name} Statistics
        </div>
    )
}

function HistoryComponent(props) {
    return (
        <div className="overall-stats">
            <table>
                <tbody>
                    <tr>
                        <th>Total Cases:</th>
                        <th>Active:</th>
                        <th>Recovered:</th>
                        <th>Deaths:</th> 
                    </tr>
                    <tr>
                        <td>{props.oldStats.total_cases}</td>
                        <td>{props.oldStats.active_cases}</td>
                        <td>{props.oldStats.total_recovered}</td>
                        <td>{props.oldStats.total_deaths}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function NewStatsComponent(props) {
    return (
        <div className="new-stats">
            <table>
                <tbody>
                    <tr>
                        <th>New Cases:</th>
                        <th>New Deaths:</th>
                        <th>Critical:</th>
                        <th>Cases per million:</th> 
                    </tr>
                    <tr>
                        <td>{props.newStats.new_cases}</td>
                        <td>{props.newStats.new_deaths}</td>
                        <td>{props.newStats.serious_critical}</td>
                        <td>
                            {(props.isWorldStats) ? 
                                props.newStats.total_cases_per_1m_population : 
                                props.newStats.total_cases_per1m 
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function StatsComponent(props) {
    return (
        <div className="stats-component">
            <div className="title-div">
                {(props.isWorldStats) ? 
                    'World Statistics': 
                    <FlagComponent flag={props.countryStats} />
                }
            </div>
            <div className="graph-div">
                <Pie data={props.world} legend={pieChartOptions.legend} width={300} height={300} options={pieChartOptions.options} />
            </div>
            <HistoryComponent oldStats={props.worldStats} />
            <NewStatsComponent newStats={props.worldStats} isWorldStats={props.isWorldStats} />
        </div>
    )
}

export default StatsComponent