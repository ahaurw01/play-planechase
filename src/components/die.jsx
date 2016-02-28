import React from 'react'

const Die = ({ roll, face }) =>
  <button className="game-die" onClick={roll}>
    {face}
  </button>

Die.propTypes = {
  roll: React.PropTypes.func.isRequired,
  face: React.PropTypes.string.isRequired,
}

export default Die
