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

function StatsComponent(props) {
    return (
        <div className="stats-component">
            <div className="title-div">
                {props.statsTopic} Statistics
            </div>
            <div className="graph-div">
                <Pie data={props.world} legend={pieChartOptions.legend} width={300} height={300} options={pieChartOptions.options} />
            </div>
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
                            <td>{props.worldStats.total_cases}</td>
                            <td>{props.worldStats.active_cases}</td>
                            <td>{props.worldStats.total_recovered}</td>
                            <td>{props.worldStats.total_deaths}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                            <td>{props.worldStats.new_cases}</td>
                            <td>{props.worldStats.new_deaths}</td>
                            <td>{props.worldStats.serious_critical}</td>
                            <td>
                                {(props.statsTopic === 'World') ? 
                                    props.worldStats.total_cases_per_1m_population : 
                                    props.worldStats.total_cases_per1m 
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StatsComponent