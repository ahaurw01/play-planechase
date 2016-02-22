import React from 'react'
import extend from 'lodash/extend'
import filter from 'lodash/filter'
import cards from '../data/cards'
import CardCheckList from './card-check-list'
import CardSpoiler from './card-spoiler'

const NewGame = React.createClass({
  getInitialState() {
    return {
      cards: cards.map((card) => {
        return extend(card, { selected: true })
      }),
      spoiledCard: {
        imageUrl: 'images/planechase-back.jpg'
      },
      showSpoiler: false
    }
  },

  toggleCard(clickedCard) {
    const cards = this.state.cards.map((card) => {
      if (card.name === clickedCard.name) {
        return extend(card, { selected: !card.selected })
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

  getCardsOfType(type) {
    return filter(this.state.cards, ['type', type])
  },

  render() {
    return (
      <div>
        <h2>New Game</h2>
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
      </div>
    )
  }
})


export default NewGame
