import React from 'react'
import CardCheckItem from './card-check-item'

const renderItem = (toggleCard) =>
  (card) =>
    <CardCheckItem card={card} toggleCard={toggleCard} key={card.name} />

const CardCheckList = ({ title, cards, toggleCard }) =>
  <div>
    <h3>{title}</h3>
    {cards.map(renderItem(toggleCard))}
  </div>

CardCheckList.propTypes = {
  title: React.PropTypes.string.isRequired,
  cards: React.PropTypes.array.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
}

export default CardCheckList
