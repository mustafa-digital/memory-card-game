import { useState } from 'react';
import './styles/reset.css';
import './styles/style.css';

import { Game } from './components/Game';
import { Title } from './components/Title';
import { Logo } from './components/Logo';

export function App() {
  const [screen, setScreen] = useState('title');

  function handleScreenChange(screen) {
    setScreen(screen);
  }

  switch (screen) {
    case 'title': {
      return (
        <>
          <Logo />
          <div className="title-screen-main">
            <Title />
            <Play handlePlayClicked={handleScreenChange} />
          </div>
        </>
      );
    }
    case 'game': {
      return (
        <>
          <Game changeScreen={handleScreenChange} />
        </>
      );
    }
    default: {
      throw Error('Error! No such page exists.');
    }
  }
}

function Play({ handlePlayClicked }) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="title-play-wrapper">
      <button
        type="button"
        onClick={() => handlePlayClicked('game')}
        className="play-btn"
      >
        Play
      </button>
      <button
        type="button"
        className="how-to-btn"
        onClick={() => setShowHelp(true)}
      >
        How to Play
      </button>
    </div>
  );
}
