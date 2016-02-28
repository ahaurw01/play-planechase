import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'
import { browserHistory } from 'react-router'
import Toggle from 'react-toggle'
import cards from '../data/cards'
import CardCheckList from './card-check-list'
import CardSpoiler from './card-spoiler'

const randomCardUri =
  'https://kczadcwkwd.execute-api.us-east-1.amazonaws.com/prod/random-mtg-card'

const NewGame = React.createClass({
  getInitialState() {
    return {
      cards: cards.map((card) => {
        return _.extend(card, { selected: true })
      }),
      spoiledCard: {
        imageUrl: 'images/planechase-back.jpg'
      },
      showSpoiler: false,
      isPublic: true,
      name: ''
    }
  },

  componentDidMount() {
    this.gamesRef = new Firebase('https://play-planechase.firebaseio.com/games')
    this.initializePublicName()
  },

  initializePublicName() {
    const req = new XMLHttpRequest()
    req.addEventListener('load', () => {
      try {
        const card = JSON.parse(req.response)
        this.setState({
          name: card.name
        })
      } catch (err) { /* No matter. */ }
    });
    req.open('GET', randomCardUri)
    req.send()
  },

  toggleCard(clickedCard) {
    const cards = this.state.cards.map((card) => {
      if (card.name === clickedCard.name) {
        return _.extend(card, { selected: !card.selected })
      }
      return card
    })
    this.setState({ cards })
  },

  showSpoiler(card) {
    this.setState({
      spoiledCard: card,
      showSpoiler: true
    })
  },

  hideSpoiler() {
    this.setState({
      showSpoiler: false
    })
  },

  changePublic() {
    this.setState({
      isPublic: !this.state.isPublic
    })
  },

  changeName(event) {
    this.setState({
      name: event.target.value
    })
  },

  getCardsOfType(type) {
    return _.filter(this.state.cards, ['type', type])
  },

  startGame() {
    const selectedCards = _(this.state.cards)
      .filter(['selected', true])
      .map((card) => _.omit(card, ['selected']))
      .shuffle()
      .value()

    const newGameRef = this.gamesRef.push({
      cards: selectedCards,
      currentIndex: 0,
      isPublic: this.state.isPublic,
      name: this.state.name,
    });
    const newGameId = newGameRef.key()

    browserHistory.push(`/game/${newGameId}`)
  },

  render() {
    return (
      <div className="new-game">
        <h3>New Game</h3>
        <div className="row">
          <div className="col-xs-12">
            <label className="new-game-label">
              <span className="new-game-label-text">Make public</span>
              <Toggle
                defaultChecked={this.state.isPublic}
                onChange={this.changePublic} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <label className="new-game-label">
              <span className="new-game-label-text">Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="Public game name"
                value={this.state.name}
                onChange={this.changeName} />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-default new-game-start"
              onClick={this.startGame}>
              Start Game
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <CardCheckList
              title="Planes"
              cards={this.getCardsOfType('Plane')}
              toggleCard={this.toggleCard}
              showSpoiler={this.showSpoiler} />
          </div>
          <div className="col-sm-6">
            <CardCheckList
              title="Phenomena"
              cards={this.getCardsOfType('Phenomenon')}
              toggleCard={this.toggleCard}
              showSpoiler={this.showSpoiler} />
          </div>
        </div>
        <CardSpoiler
          card={this.state.spoiledCard}
          isShowing={this.state.showSpoiler}
          hideSpoiler={this.hideSpoiler} />
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-default new-game-start"
              onClick={this.startGame}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    )
  }
})

export default NewGame
