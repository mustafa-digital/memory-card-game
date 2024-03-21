import { useState, useEffect } from 'react';

import { Title } from './Title';
import { Logo } from './Logo';
import { Difficulty } from './Difficulty';
import { Card } from './Card';

export function Game() {
  const [difficulty, setDifficulty] = useState(null);
  const [status, setStatus] = useState('difficulty_select');
  const [digimonList, setDigimonList] = useState({});
  const [selectedCards, setSelectedCards] = useState(new Set());

  const baseURL = 'https://digi-api.com/api/v1/digimon?level=child';
  const pageURL = '&&page=';
  const pageSizeURL = '&&pageSize=';

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (renderCardFront === false) setRenderCardFront(true);
  //   }, 800);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [renderCardFront]);

  if (status !== 'difficulty_select') {
    const body = document.querySelector('body');
    body.style.background =
      'url("src/assets/Images/digimon-tamers-2001-background-arts-v0-kyzd5wlaq9va1 (1).png")';
  }

  const difficultySize = {
    easy: '6',
    medium: '12',
    hard: '18',
  };

  const DIGIMON_PAGE_NUM = 20;

  function handleDifficultySelect(difficulty) {
    setStatus('loading');
    setDifficulty(difficulty);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getDigimonData(request) {
    const response = await fetch(request);

    if (response.status === 200) {
      // OK
      const data = await response.json();
      return data;
    }

    throw new Error(response.status);
  }

  function loadData() {
    const request =
      baseURL +
      pageURL +
      getRandomInt(DIGIMON_PAGE_NUM).toString() +
      pageSizeURL +
      difficultySize[difficulty];
    getDigimonData(request).then((data) => {
      setDigimonList(data.content);
      setStatus('playing');
    });
  }

  function randomizeDigimonList() {
    const digimonListMutable = [...digimonList];
    const newDigimonList = [];
    for (let i = 0; i < difficultySize[difficulty]; i++) {
      const randomSpot = getRandomInt(difficultySize[difficulty] - i);
      const digimonToMove = digimonListMutable[randomSpot];
      newDigimonList.push(digimonToMove);
      digimonListMutable.splice(randomSpot, 1);
    }
    return newDigimonList;
    // setDigimonList(newDigimonList);
  }

  function handleGameTurn(e) {
    const clickedId = Number(e.currentTarget.parentNode.dataset.id);
    // check if this card has been clicked before
    if (selectedCards.has(clickedId)) {
      console.log('Sorry, you lose.');
      setStatus('lose');
    } else {
      const newSelectedCards = new Set(selectedCards);

      const cards = document.querySelectorAll('.memory-card');
      Array.from(cards).forEach((card) => {
        if (card.classList.contains('flip-card-initial')) {
          card.classList.remove('flip-card-initial');
        }
        const animation = [
          { transform: 'rotateY(0deg)' },
          { transform: 'rotateY(180deg)' },
          { transform: 'rotateY(0deg)' },
        ];
        card.animate(animation, {
          duration: 3000,
          iterations: 1,
        });
      });

      const newDigimonList = randomizeDigimonList();
      setTimeout(() => {
        setDigimonList(newDigimonList);
        setSelectedCards(newSelectedCards.add(clickedId));
      }, 2000);
    }
  }

  switch (status) {
    case 'difficulty_select': {
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
    case 'loading': {
      loadData();
      return (
        <>
          <Logo />
          <div className="title-screen-main">
            <Title />
            <h1>Loading...</h1>
          </div>
        </>
      );
    }
    case 'playing': {
      return (
        <>
          <Logo showSprite={false} />
          <div className="game-screen">
            {digimonList.map((digimon) => {
              return (
                <Card
                  className={
                    selectedCards.size === 0 ? 'flip-card-initial' : null
                  }
                  key={digimon.id}
                  id={digimon.id}
                  name={digimon.name}
                  image={digimon.image}
                  onClick={handleGameTurn}
                />
              );
            })}
          </div>
        </>
      );
    }
  }
}
