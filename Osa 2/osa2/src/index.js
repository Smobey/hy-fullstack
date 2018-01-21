import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = (props) => {
    const rivit = props.kurssi.osat.map(osa =>
        <li key={osa.id}>
            {osa.nimi} {osa.tehtavia}
        </li>
    )

    const tehtavat = props.kurssi.osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
            {rivit}
            yhteensä {tehtavat.reduce(reducer)} tehtävää
        </div>
    )
}

const Kurssit = (props) => {
    return (
        <div>
            {props.kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi}/>)}
        </div>
    )
}

const App = () => {
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
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
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
      ]
  
    return (
      <div>
        <Kurssit kurssit={kurssit} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)