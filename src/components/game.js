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

  render() {
    return (
      <div className="game">
        {this.state.game.currentIndex}
      </div>
    )
  }
})


export default Game
