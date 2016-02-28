import React from 'react'
import { Link } from 'react-router'

const renderGame = (game) =>
  <li
    className="list-group-item"
    key={game.id}>
    <Link
      to={`/game/${game.id}`}>
      {game.name || '(no name)'}
    </Link>
  </li>

const renderEmpty = () =>
  <p>
    No games yet...
  </p>

const PublicGameList = ({ publicGames }) =>
  <div className="row">
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <ul className="list-group">
        {publicGames ? publicGames.map(renderGame) : renderEmpty()}
      </ul>
    </div>
  </div>


PublicGameList.propTypes = {
  publicGames: React.PropTypes.array.isRequired,
}

export default PublicGameList
