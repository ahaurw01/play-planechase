import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import PublicGameList from './public-game-list'

const Landing = React.createClass({
  getInitialState() {
    return {
      publicGames: [],
    }
  },

  componentDidMount() {
    this.gamesRef = new Firebase('https://play-planechase.firebaseio.com/games')
    this.gamesRef
      .orderByChild('isPublic')
      .equalTo(true)
      .on('child_added', (snapshot) => {
        const publicGames = this.state.publicGames.slice()
        const game = _.extend({}, snapshot.val(), { id: snapshot.key() })
        publicGames.unshift(game)
        this.setState({ publicGames })
      })
  },

  componentWillUnmount() {
    this.gamesRef.off()
  },

  render() {
    return (
      <div>
        <Link to="/new-game">New Game</Link>
        <PublicGameList publicGames={this.state.publicGames} />
      </div>
    )
  }
})

export default Landing
