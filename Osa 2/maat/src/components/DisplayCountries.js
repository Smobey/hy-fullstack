import React from 'react'

const DisplayCountries = (props) => {
    const countriesToShow = props.countries.filter(country => country.name.toLowerCase().startsWith(props.countryFilter.toLowerCase()))
    console.log(countriesToShow.length)
  
    if (countriesToShow.length > 10)
    {
      return("too many matches, specify another filter")
    }
    else if (countriesToShow.length > 1)
    {
      console.log(countriesToShow)
      return(countriesToShow.map(country => <div key={country.name} onClick={() => props.onClick(country=country.name)}>
        {country.name}
        </div>))
    }
    else
    {
      console.log(countriesToShow)
      return(countriesToShow.map(country => <div key={country.name}>
        <h2>{country.name}</h2>
        <div>capital: {country.capital}</div>
        <div>population: {country.population}</div>
        <img src={country.flag} alt="dick butt" width="400"/>
        </div>))
    }
}

export default DisplayCountries