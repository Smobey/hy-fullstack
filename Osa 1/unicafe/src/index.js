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

    displayAverage = () => {
        let average = 0
        if (this.state.good + this.state.neutral + this.state.bad !== 0)
                average = (this.state.good - this.state.bad) / (this.state.good + this.state.neutral + this.state.bad)
        return (<div>Keskiarvo: {average}</div>)
    }

    displayGoodPercentage = () => {
        let percentage = 0
        if (this.state.good + this.state.neutral + this.state.bad !== 0)
                percentage = (this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed(2)
        return (<div>Positiivisia: {percentage}%</div>)
    }

    displayButtons = () => {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <button onClick={this.incrementValue(1)}> hyvä </button>
                <button onClick={this.incrementValue(0)}> neutraali </button>
                <button onClick={this.incrementValue(-1)}> huono </button>
            </div>
        )
    }

    displayStatistics = () => {
        return (
            <div>
                <h1>Statistiikka</h1>
                Hyvä: {this.state.good}<br/>
                Neutraali: {this.state.neutral}<br/>
                Huono: {this.state.bad}<br/>
                <this.displayAverage />
                <this.displayGoodPercentage />
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