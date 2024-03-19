import { useState } from 'react';

import { Title } from './Title';
import { Logo } from './Logo';
import { Difficulty } from './Difficulty';

export function Game() {
  const [difficulty, setDifficulty] = useState(null);

  function handleDifficultySelect(difficulty) {
    setDifficulty(difficulty);
  }

  if (!difficulty) {
    return (
      <>
        <Logo />
        <div className="title-screen-main">
          <Title />
          <Difficulty handleDifficultySelect={handleDifficultySelect} />
        </div>
      </>
    );
  }

  switch (difficulty) {
    case 'easy': {
    }
  }
}
