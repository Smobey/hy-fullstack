import React from 'react'
import ReactDOM from 'react-dom'

import DisplayPersons from './components/DisplayPersons'
import personService from './components/Services'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      nameFilter: ''
    }
  }

  addName = (event) => {
    event.preventDefault()

    const duplicate = this.state.persons.map(person => person.name).indexOf(this.state.newName) !== -1
    if (!duplicate) {
      const person = {name: this.state.newName, number: this.state.newNumber}

      personService
        .create(person)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: ''
        })
    })
    }
  }

  deleteName = (props) => {
    personService
    .remove(props)
    .then(response => {
      personService
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ nameFilter: event.target.value })
  }

  componentWillMount() {
    personService
    .getAll()
    .then(response => {
      this.setState({persons: response.data})
    })
  }

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <div>
          rajaa näytetettäviä: <input value={this.state.nameFilter} onChange={this.handleFilterChange}/>
        </div>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <DisplayPersons persons={this.state.persons} nameFilter={this.state.nameFilter} onDeleteClick={this.deleteName} />
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)