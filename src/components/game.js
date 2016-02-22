import React from 'react'

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

  render() {
    return (
      <div className="game">
        <div
          className="game-card-image"
          style={this.getCurrentCardStyle()} />
      </div>
    )
  }
})


export default Game
