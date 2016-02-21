import React from 'react'

const CardCheckItem = ({card}) =>
  <label>
    <input type="checkbox" />
    {card.name}
  </label>

CardCheckItem.propTypes = {
  card: React.PropTypes.object.isRequired,
}

export default CardCheckItem
