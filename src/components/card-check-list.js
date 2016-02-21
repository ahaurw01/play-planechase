import React from 'react'
import CardCheckItem from './card-check-item'

const renderItem = (card) =>
  <CardCheckItem card={card} key={card.name} />

const CardCheckList = (props) =>
  <div>
    {props.cards.map(renderItem)}
  </div>

CardCheckList.propTypes = {
  cards: React.PropTypes.array
}

export default CardCheckList
