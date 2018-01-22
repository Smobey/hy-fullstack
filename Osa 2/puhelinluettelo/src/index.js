import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: "09 741 4143" },
        { name: 'Heka Nuuttinen', number: "050 314 5558" },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      nameFilter: ''
    }
  }

  displayPersons = (props) => {
    const personsToShow = this.state.persons.filter(person => person.name.toLowerCase().startsWith(this.state.nameFilter.toLowerCase()))
    console.log(personsToShow)

    return(personsToShow.map(person => <div key={person.name}>
      {person.name} - {person.number}
      </div>))
  }

  addName = (event) => {
    event.preventDefault()

    const duplicate = this.state.persons.map(person => person.name).indexOf(this.state.newName) !== -1
    if (!duplicate) {

    const person = {name: this.state.newName, number: this.state.newNumber}
    const persons = this.state.persons.concat(person)

    this.setState({persons, newName: ''})
    }
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
        <this.displayPersons />
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
)