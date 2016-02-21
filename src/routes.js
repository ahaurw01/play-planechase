import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/app'
import Landing from './components/landing'
import NewGame from './components/new-game'
import Game from './components/game'

export const setup = () => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="new-game" component={NewGame} />
        <Route path="/game/:gameId" component={Game} />
      </Route>
    </Router>
  ), document.getElementById('app'))
}

