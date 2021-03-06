import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0],
      highest_index: 0
    }
  }

    selectRandom = () => {    
        const max = 6;
        const rand = Math.floor(Math.random() * Math.floor(max))
        return () => {
            this.setState({ selected: rand })
        }
    }

    incrementVote = () => {    
        let vote_array = this.state.votes
        vote_array[this.state.selected] += 1
        this.setState({ votes: vote_array })

        let highest_index = 0
        let highest_value = 0
        this.state.votes.forEach((value, index) => {
            if (value > highest_value) {
                highest_value = value
                highest_index = index
                console.log(value)
            }
        })
        console.log("highest value: " + highest_value + " | highest index: " + highest_index)
        this.setState({ highest_index: highest_index })
    }

    buttonNext = () => {
        return (
            <button onClick={this.selectRandom()}> next anecote </button>
        )
    }

    buttonVote = () => {
        return (
            <button onClick={() => { this.incrementVote() }}> vote </button>
        )
    }

    displayVotes = () => {
        return (
            <div>
                has {this.state.votes[this.state.selected]} votes
            </div>
        )
    }

    displayAnecdote = (props) => {
        return (
            <div>
                {this.props.anecdotes[props.anecdote]}<br/>
                has {this.state.votes[props.anecdote]} votes
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>
                <this.displayAnecdote anecdote={this.state.selected}/>
                </h2>
                <this.buttonNext/>
                <this.buttonVote/>
                <h1>Anecdote with the most votes:</h1>
                <h2>
                <this.displayAnecdote anecdote={this.state.highest_index}/>
                </h2>
            </div>
        )
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)