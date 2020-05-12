import React from 'react'
import './CountrySelect.scss'
import Select from 'react-select'

class CountrySelect extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedOption: {
                value: "CAN",
                label: "Canada"
            }
        }

        this.handleChange = this.handleChange.bind(this)

    }

      handleChange = selectedOption => {
        this.setState({ selectedOption })
        this.props.handleChangeEvent(selectedOption.value)
      }

      generateCountryOptions() {
          var countryOptions = []
          this.props.optionValues.forEach(country => {
            countryOptions.push({
                value: country.alpha3Code,
                label: country.name
            })
          })
          return countryOptions
      }

      render() {

        const countryOptions = this.generateCountryOptions()
        // this.setIntialState()

        return (
            <div className="select-wrapper">
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={countryOptions}
                />
            </div>
        )
      }

}

export default CountrySelect