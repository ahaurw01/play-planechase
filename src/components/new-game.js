import React from 'react'
import extend from 'lodash/extend'
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

  render() {
    return (
      <div>
        <h2>New Game</h2>
        <CardCheckList cards={this.state.cards} toggleCard={this.toggleCard} />
      </div>
    )
  }
})


export default NewGame
