import React from 'react'
import CardCheckItem from './card-check-item'

const renderItem = (toggleCard, showSpoiler) =>
  (card) =>
    <CardCheckItem
      card={card}
      toggleCard={toggleCard}
      showSpoiler={showSpoiler}
      key={card.name} />

const CardCheckList = ({ title, cards, toggleCard, showSpoiler }) =>
  <div>
    <h3>{title}</h3>
    {cards.map(renderItem(toggleCard, showSpoiler))}
  </div>

CardCheckList.propTypes = {
  title: React.PropTypes.string.isRequired,
  cards: React.PropTypes.array.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
  showSpoiler: React.PropTypes.func.isRequired,
}

export default CardCheckList
