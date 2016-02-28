import React from 'react'
import SpinningDie from './spinning-die'

const Die = ({ roll, face }) => {
  let innards
  if (true) { //(face === 'rolling') {
    innards = (<SpinningDie />)
  } else {
    innards = (
      <button className="" onClick={roll}>
        {face}
      </button>
    )
  }
  return (
    <div className="game-die">
      {innards}
    </div>
  )
}


Die.propTypes = {
  roll: React.PropTypes.func.isRequired,
  face: React.PropTypes.string.isRequired,
}

export default Die
