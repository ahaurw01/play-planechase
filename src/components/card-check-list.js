import React from 'react'
import CardCheckItem from './card-check-item'

const renderItem = (toggleCard) =>
  (card) =>
    <CardCheckItem card={card} toggleCard={toggleCard} key={card.name} />

const CardCheckList = ({ cards, toggleCard }) =>
  <div>
    {cards.map(renderItem(toggleCard))}
  </div>

CardCheckList.propTypes = {
  cards: React.PropTypes.array.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
}

export default CardCheckList
