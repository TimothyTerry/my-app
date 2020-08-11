import React from 'react';
import './App.css';
import Game from './components/Game'
import Raccoonspicture from './assets/images/raccoon.png'
import squirrel from './assets/images/squirrel.png'
import bunz from './assets/images/bunny.png'
import dogs from './assets/images/hound.png'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoonspicture
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrel
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunz
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: dogs
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
