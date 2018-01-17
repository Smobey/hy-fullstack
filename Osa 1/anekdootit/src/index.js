import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [1, 0, 0, 0, 0, 0]
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

    render() {
        return (
            <div>
                <h2>
                {this.props.anecdotes[this.state.selected]}
                <this.displayVotes/>
                </h2>
                <this.buttonNext/>
                <this.buttonVote/>
                
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