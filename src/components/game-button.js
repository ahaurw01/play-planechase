import React from 'react'

const GameButton = ({ direction, go }) =>
  <div onClick={go}>{direction}</div>

GameButton.propTypes = {
  direction: React.PropTypes.string.isRequired,
  go: React.PropTypes.func.isRequired,
}

export default GameButton
