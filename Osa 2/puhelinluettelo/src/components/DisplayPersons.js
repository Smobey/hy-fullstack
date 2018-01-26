import React from 'react'

const DisplayPersons = (props) => {
    const personsToShow = props.persons.filter(person => person.name.toLowerCase().startsWith(props.nameFilter.toLowerCase()))
  
    return(personsToShow.map(person => <div key={person.name}>
      {person.name} - {person.number}
      </div>))
  }

export default DisplayPersons