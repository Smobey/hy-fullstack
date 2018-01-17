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

    incrementGood = () => {
        return () => {
            this.setState({ good: (this.state.good + 1) })
        }
    }

    incrementNeutral = () => {
        return () => {
            this.setState({ neutral: (this.state.neutral + 1) })
        }
    }

    incrementBad = () => {
        return () => {
            this.setState({ bad: (this.state.bad + 1) })
        }
    }

    displayButtons = () => {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <button onClick={this.incrementGood()}> hyvä </button>
                <button onClick={this.incrementNeutral()}> neutraali </button>
                <button onClick={this.incrementBad()}> huono </button>
            </div>
        )
    }

    displayStatistics = () => {
        return (
            <div>
                <h1>Statistiikka</h1>
                <p>
                Hyvä: {this.state.good}<br/>
                Neutraali: {this.state.neutral}<br/>
                Huono: {this.state.bad}
                </p>
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