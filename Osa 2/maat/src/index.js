import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import DisplayCountries from './components/DisplayCountries'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      countryFilter: ''
    }
  }

  clickCountry = (props) => {
    this.setState({ countryFilter: props })
  }

  handleFilterChange = (event) => {
    this.setState({ countryFilter: event.target.value })
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  render() {
    return (
      <div>
        <div>
          find countries: <input value={this.state.countryFilter} onChange={this.handleFilterChange}/>
        </div>
        <DisplayCountries countries={this.state.countries} countryFilter={this.state.countryFilter} onClick={this.clickCountry}/>
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)