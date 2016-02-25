import React from 'react'
import GameButton from './game-button'

const Game = React.createClass({
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
    console.log('back!')
  },

  goForward() {
    console.log('forward!')
  },

  render() {
    return (
      <div className="game">
        <div
          className="game-card-image"
          style={this.getCurrentCardStyle()} />
        <GameButton direction="back" go={this.goBack} />
        <GameButton direction="forward" go={this.goForward} />
      </div>
    )
  }
})


export default Game
