import React from 'react'

const makeClassName = (isShowing) =>
  'card-spoiler ' + (isShowing ? '' : 'hidden')

const makeStyle = (imageUrl) =>
  ({ 'background-image': `url(${imageUrl})` })

const CardSpoiler = ({ card, isShowing, hideSpoiler }) =>
  <div className={makeClassName(isShowing)} onClick={hideSpoiler}>
    <div className="card-spoiler-image" style={makeStyle(card.imageUrl)}>
    </div>
  </div>

CardSpoiler.propTypes = {
  card: React.PropTypes.object.isRequired,
  isShowing: React.PropTypes.bool.isRequired,
  hideSpoiler: React.PropTypes.func.isRequired,
}

export default CardSpoiler
