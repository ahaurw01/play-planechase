import _ from 'lodash'
import React from 'react'
import Firebase from 'firebase'
import GameButton from './game-button'
import Die from './die'

const Game = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return { game: {} }
  },

  componentDidMount() {
    const gameId = this.props.params.gameId
    this.gameRef = new Firebase(
      `https://play-planechase.firebaseio.com/games/${gameId}`)

    this.gameRef.on('value', (snapshot) => {
      this.setState({ game: snapshot.val() })
    })
  },

  componentWillUnmount() {
    this.gameRef.off();
  },

  getCurrentCardStyle() {
    const currentIndex = _.get(this.state.game, 'currentIndex')
    const cards = _.get(this.state.game, 'cards')
    const currentCard = _.get(cards, `[${currentIndex}]`)
    return { backgroundImage: `url(${_.get(currentCard, 'imageUrl')})` }
  },

  goBack() {
    const cards = _.get(this.state, 'game.cards')
    let currentIndex = _.get(this.state, 'game.currentIndex')

    if (!cards) {
      return
    }

    currentIndex--
    if (currentIndex < 0) {
      currentIndex = cards.length - 1
    }

    this.setNewIndex(currentIndex)
  },

  goForward() {
    const cards = _.get(this.state, 'game.cards')
    let currentIndex = _.get(this.state, 'game.currentIndex')

    if (!cards) {
      return
    }

    currentIndex++
    if (currentIndex >= cards.length) {
      currentIndex = 0
    }

    this.setNewIndex(currentIndex)
  },

  setNewIndex(index) {
    this.gameRef.update({
      currentIndex: index
    })
  },

  roll() {
    this.gameRef.update({ face: 'rolling' })

    const random = Math.floor(Math.random() * 6) + 1
    let face = 'blank'
    if (random === 1) {
      face = 'walk'
    } else if (random === 6) {
      face = 'chaos'
    }

    setTimeout(() => {
      this.gameRef.update({ face })
    }, 1000)
  },

  getDieFace() {
    return _.get(this.state, 'game.face') || 'blank'
  },

  render() {
    return (
      <div className="game">
        <div
          className="game-card-image"
          style={this.getCurrentCardStyle()} />
        <GameButton direction="back" go={this.goBack} />
        <GameButton direction="forward" go={this.goForward} />
        <Die roll={this.roll} face={this.getDieFace()} />
      </div>
    )
  }
})

export default Game
