import React from 'react'
import { Link } from 'react-router'

const Landing = (props) =>
  <div>
    <p>Landing</p>
    <Link to="/new-game">New Game</Link>
    <Link to="/game/1">Game 1</Link>
  </div>

export default Landing
