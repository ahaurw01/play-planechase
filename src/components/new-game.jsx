import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'
import { browserHistory } from 'react-router'
import Toggle from 'react-toggle'
import cards from '../data/cards'
import CardCheckList from './card-check-list'
import CardSpoiler from './card-spoiler'

const NewGame = React.createClass({
  getInitialState() {
    return {
      cards: cards.map((card) => {
        return _.extend(card, { selected: true })
      }),
      spoiledCard: {
        imageUrl: 'images/planechase-back.jpg'
      },
      showSpoiler: false,
      isPublic: true,
    }
  },

  componentDidMount() {
    this.gamesRef = new Firebase('https://play-planechase.firebaseio.com/games')
  },

  toggleCard(clickedCard) {
    const cards = this.state.cards.map((card) => {
      if (card.name === clickedCard.name) {
        return _.extend(card, { selected: !card.selected })
      }
      return card
    })
    this.setState({ cards })
  },

  showSpoiler(card) {
    this.setState({
      spoiledCard: card,
      showSpoiler: true
    })
  },

  hideSpoiler() {
    this.setState({
      showSpoiler: false
    })
  },

  changePublic() {
    this.setState({
      isPublic: !this.state.isPublic
    })
  },

  getCardsOfType(type) {
    return _.filter(this.state.cards, ['type', type])
  },

  startGame() {
    const selectedCards = _(this.state.cards)
      .filter(['selected', true])
      .map((card) => _.omit(card, ['selected']))
      .shuffle()
      .value()

    const newGameRef = this.gamesRef.push({
      cards: selectedCards,
      currentIndex: 0,
      isPublic: this.state.isPublic,
    });
    const newGameId = newGameRef.key()

    browserHistory.push(`/game/${newGameId}`)
  },

  render() {
    return (
      <div>
        <h2>New Game</h2>
        <label className="toggle">
          <Toggle
            defaultChecked={this.state.isPublic}
            onChange={this.changePublic} />
            <span className="toggle-text">Make public</span>
        </label>
        <button
          onClick={this.startGame}>
          Start Game
        </button>
        <CardCheckList
          title="Planes"
          cards={this.getCardsOfType('Plane')}
          toggleCard={this.toggleCard}
          showSpoiler={this.showSpoiler} />
        <CardCheckList
          title="Phenomena"
          cards={this.getCardsOfType('Phenomenon')}
          toggleCard={this.toggleCard}
          showSpoiler={this.showSpoiler} />
        <CardSpoiler
          card={this.state.spoiledCard}
          isShowing={this.state.showSpoiler}
          hideSpoiler={this.hideSpoiler} />
        <button
          onClick={this.startGame}>
          Start Game
        </button>
      </div>
    )
  }
})


export default NewGame
