import _ from 'lodash'
import React from 'react'
import Firebase from 'firebase'
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
    const filter = this.gamesRef
      .orderByChild('isPublic')
      .equalTo(true)

    filter.on('child_added', this.makePublicGameHandler('added'))
    filter.on('child_removed', this.makePublicGameHandler('removed'))
  },

  makePublicGameHandler(event) {
    return (snapshot) => {
      const publicGames = this.state.publicGames.slice()
      const game = _.extend({}, snapshot.val(), { id: snapshot.key() })
      if (event === 'added') {
        publicGames.unshift(game)
      } else {
        _.remove(publicGames, ['id', snapshot.key()])
      }
      this.setState({ publicGames })
    }
  },

  componentWillUnmount() {
    this.gamesRef.off()
  },

  render() {
    return (
      <div>
        <div className="row text-center">
          <Link to="/new-game">
            <button className="btn btn-primary">
              Start a new game
            </button>
          </Link>
        </div>

        <h3>Join a public game</h3>
        <PublicGameList publicGames={this.state.publicGames} />
      </div>
    )
  }
})

export default Landing
