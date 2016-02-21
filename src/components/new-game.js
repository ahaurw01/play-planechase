import React from 'react'
import extend from 'lodash/extend'
import filter from 'lodash/filter'
import cards from '../data/cards'
import CardCheckList from './card-check-list'

const NewGame = React.createClass({
  getInitialState() {
    return {
      cards: cards.map((card) => {
        return extend(card, { selected: true })
      })
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
          toggleCard={this.toggleCard} />
        <CardCheckList
          title="Phenomena"
          cards={this.getCardsOfType('Phenomenon')}
          toggleCard={this.toggleCard} />
      </div>
    )
  }
})


export default NewGame
