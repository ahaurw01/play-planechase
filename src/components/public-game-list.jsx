import React from 'react'
import { Link } from 'react-router'

const renderGame = (game) =>
  <li
    className="public-game-list-item"
    key={game.id}>
    <Link
      to={`/game/${game.id}`}>
      {game.id}
    </Link>
  </li>

const PublicGameList = ({ publicGames }) =>
  <ul className="public-game-list">
    {publicGames.map(renderGame)}
  </ul>

PublicGameList.propTypes = {
  publicGames: React.PropTypes.array.isRequired,
}

export default PublicGameList
