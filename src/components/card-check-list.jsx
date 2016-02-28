import React from 'react'
import CardCheckItem from './card-check-item'

const renderItem = (toggleCard, showSpoiler) => {
  const renderCardCheckItem = (card) =>
    <CardCheckItem
      card={card}
      toggleCard={toggleCard}
      showSpoiler={showSpoiler}
      key={card.name} />
  return renderCardCheckItem
}

const CardCheckList = ({ title, cards, toggleCard, showSpoiler }) =>
  <div className="card-check-list panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">{title}</h4>
    </div>
    <ul className="list-group">
      {cards.map(renderItem(toggleCard, showSpoiler))}
    </ul>
  </div>

CardCheckList.propTypes = {
  title: React.PropTypes.string.isRequired,
  cards: React.PropTypes.array.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
  showSpoiler: React.PropTypes.func.isRequired,
}

export default CardCheckList
