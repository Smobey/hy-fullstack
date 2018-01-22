import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
        { name: 'Heka Nuuttinen' }
      ],
      newName: ''
    }
  }

  displayPersons = (props) => {
    return(this.state.persons.map(person => <div key={person.name}>{person.name}</div>))
  }

  addName = (event) => {
    event.preventDefault()

    const duplicate = this.state.persons.map(person => person.name).indexOf(this.state.newName) !== -1
    if (!duplicate) {

    const person = {name: this.state.newName}
    const persons = this.state.persons.concat(person)

    this.setState({persons, newName: ''})
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
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