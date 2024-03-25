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
        className={showHelp ? 'how-to-btn showing-help' : 'how-to-btn'}
        onClick={(evt) => {
          evt.target.blur();
          setShowHelp(!showHelp);
        }}
      >
        How to Play
      </button>
      {showHelp && (
        <div className="help-container">
          <img
            style={{ height: '225px', position: 'relative', left: '30px' }}
            src="src/assets/Images/augmon-help.png"
            alt="agumon picture"
          />
          <img
            className="game-help"
            src="src/assets/Images/pixel-speech-bubble.png"
            alt="help tip: Each turn, click a card, but don't click the same card twice!"
          />
          <img
            className="game-help-cards"
            src="src/assets/Images/help-cards-gif.gif"
            alt="help card gif"
          />
          <div className="help-close-btn-wrapper">
            <button onClick={() => setShowHelp(false)}>OK</button>
          </div>
          {/* <img
            className="game-help-cards"
            src="src/assets/Images/help-cards-unknown.png"
            alt="cards face down"
          />
          <img
            className="game-help-cards"
            src="src/assets/Images/help-cards-known.png"
            alt="revealed cards"
          /> */}
        </div>
      )}
    </div>
  );
}
