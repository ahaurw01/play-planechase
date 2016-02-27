import React from 'react'

const makeButtonClass = (direction) =>
  'game-button ' +
    (direction === 'forward' ? 'game-button-forward' : 'game-button-back')

const makeIconClass = (direction) =>
  direction === 'forward' ? 'icon-arrow-right' : 'icon-arrow-left'

const GameButton = ({ direction, go }) =>
  <button className={makeButtonClass(direction)} onClick={go}>
    <i className={makeIconClass(direction)} />
  </button>

GameButton.propTypes = {
  direction: React.PropTypes.string.isRequired,
  go: React.PropTypes.func.isRequired,
}

export default GameButton
