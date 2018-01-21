import React from 'react'

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
export default Kurssi