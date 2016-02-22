import React from 'react'

const makeClickHandler = (card, toggleCard) =>
  (event) => {
    event.preventDefault()
    toggleCard(card)
  }

const makeIconClassName = (selected) => {
  return 'card-check-icon ' + (selected ? 'icon-checkmark' : 'icon-checkmark2')
}

const CardCheckItem = ({ card, toggleCard }) =>
  <div onClick={makeClickHandler(card, toggleCard)}>
    <i className={makeIconClassName(card.selected)} />
    {card.name}
  </div>

CardCheckItem.propTypes = {
  card: React.PropTypes.object.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
}

export default CardCheckItem
