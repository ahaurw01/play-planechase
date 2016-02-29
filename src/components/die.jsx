import React from 'react'
import SpinningDie from './spinning-die'

const Die = ({ roll, face }) => {
  let innards
  if (face === 'rolling') {
    innards = (<SpinningDie />)
  } else {
    innards = (
      <div className="game-die-face" />
    )
  }
  return (
    <button className="game-die" onClick={roll}>
      {innards}
    </button>
  )
}

Die.propTypes = {
  roll: React.PropTypes.func.isRequired,
  face: React.PropTypes.string.isRequired,
}

export default Die
