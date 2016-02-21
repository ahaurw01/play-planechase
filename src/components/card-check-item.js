import React from 'react'

const makeClickHandler = (card, toggleCard) =>
  (event) => {
    event.preventDefault()
    toggleCard(card)
  }

const CardCheckItem = ({ card, toggleCard }) =>
  <div onClick={makeClickHandler(card, toggleCard)}>
    <i className={card.selected ? 'icon-checkmark' : 'icon-checkmark2'} />
    {card.name}
  </div>

CardCheckItem.propTypes = {
  card: React.PropTypes.object.isRequired,
  toggleCard: React.PropTypes.func.isRequired,
}

export default CardCheckItem
