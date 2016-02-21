import React from 'react'
import cards from '../data/cards'
import CardCheckList from './card-check-list'

const NewGame = () =>
  <div>
    <h2>New Game</h2>
    <CardCheckList cards={cards} />
  </div>

export default NewGame
