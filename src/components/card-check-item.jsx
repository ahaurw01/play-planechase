import React from 'react'

const makeToggleHandler = (card, toggleCard) =>
  (event) => {
    event.preventDefault()
    toggleCard(card)
  }

const makeSpoilerHandler = (card, showSpoiler) =>
  (event) => {
    event.preventDefault()
    showSpoiler(card)
  }

const makeIconClassName = (selected) => {
  return 'card-check-icon ' + (selected ? 'icon-checkmark' : 'icon-checkmark2')
}

const CardCheckItem = ({ card, toggleCard, showSpoiler }) =>
  <div>
    <i
      className={makeIconClassName(card.selected)}
      onClick={makeToggleHandler(card, toggleCard)} />
    <span
      className="card-link"
      onClick={makeSpoilerHandler(card, showSpoiler)}>
      {card.name}
    </span>
  </div>

CardCheckItem.propTypes = {
  card: React.PropTypes.object.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
  showSpoiler: React.PropTypes.func.isRequired,
}

export default CardCheckItem
