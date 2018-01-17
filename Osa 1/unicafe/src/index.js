import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    incrementValue = (type) => {
        return () => {
            if (type === 1)
                this.setState({ good: (this.state.good + 1) })
            else if (type === 0)
                this.setState({ neutral: (this.state.neutral + 1) })
            else if (type === -1)
                this.setState({ bad: (this.state.bad + 1) })
        }
    }

    button = (props) => {
        return (
            <button onClick={this.incrementValue(props.value)}> {props.name} </button>
        )
    }

    displayButtons = () => {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <this.button name={"Hyvä"} value={1} />
                <this.button name={"Neutraali"} value={0} />
                <this.button name={"Huono"} value={-1} />
            </div>
        )
    }

    statistic = (props) => {
        if (props.type === "percentage")
            return (<tr><td>{props.name}:</td><td>{props.value}%</td></tr>)
        return (<tr><td>{props.name}:</td><td>{props.value}</td></tr>)
    }

    displayStatistics = () => {
        if (this.state.good + this.state.neutral + this.state.bad === 0)
            return (
                <div>
                    <h1>Statistiikka</h1>
                    <p>Yhtään palautetta ei ole annettu.</p>
                </div>
            )

        return (
            <div>
                <h1>Statistiikka</h1>
                <table>
                <tbody>
                <this.statistic name={"Hyvä"} value={this.state.good} type={"normal"} />
                <this.statistic name={"Neutraali"} value={this.state.neutral} type={"normal"} />
                <this.statistic name={"Huono"} value={this.state.bad} type={"normal"} />
                <this.statistic name={"Keskiarvo"} value={(this.state.good - this.state.bad) / (this.state.good + this.state.neutral + this.state.bad)} type={"normal"} />
                <this.statistic name={"Positiivisia"} value={(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed(2)} type={"percentage"} />
                </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (
        <div>
            <this.displayButtons />
            <this.displayStatistics />
        </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)