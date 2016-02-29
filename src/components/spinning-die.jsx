import React from 'react'

const SpinningDie = () =>
  <div className="game-die-spinning">
    <div className="cube">
      <div className="cube-front cube-blank"></div>
      <div className="cube-back cube-blank"></div>
      <div className="cube-top cube-blank"></div>
      <div className="cube-bottom cube-blank"></div>
      <div className="cube-left">
        <div className="cube-symbol cube-chaos" />
      </div>
      <div className="cube-right">
        <div className="cube-symbol cube-walk" />
      </div>
    </div>
  </div>

export default SpinningDie
