import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    const rivit = () => props.kurssi.osat.map(osa =>
        <li key={osa.id}>
            {osa.nimi} {osa.tehtavia}
        </li>
    )

    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
            {rivit()}
        </div>
    )
}

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)