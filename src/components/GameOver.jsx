export function GameOver({ status, resetGame, setStatus, changeScreen }) {
  return (
    <div className="game-over-screen">
      <div className="game-over-text-wrapper">
        {status === 'win' && <h1 className="game-over-text">You win!</h1>}
        {status === 'lose' && (
          <h1 className="game-over-text">Sorry, you lose.</h1>
        )}
        {status === 'error' && (
          <h1 className="game-over-text">
            Oops, that wasn&apos;t supposed to happen.
          </h1>
        )}
      </div>
      <img
        className="game-over-gif"
        src={
          (status === 'win' && 'assets/Images/digimon-adventure.gif') ||
          (status === 'lose' && 'assets/Images/digimon-agumon.gif') ||
          (status === 'error' && 'assets/Images/digimon-error.png')
        }
        alt={status + 'animation'}
      />
      <div className="game-over-btn-wrapper">
        {status === 'win' || status === 'error' ? (
          <button
            onClick={() => {
              resetGame();
              changeScreen('title');
            }}
          >
            {status === 'win' ? 'Continue' : 'Back to Home'}
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                resetGame();
                setStatus('difficulty_select');
              }}
            >
              Change Difficulty
            </button>
            <button
              onClick={() => {
                resetGame();
                setStatus('loading');
              }}
            >
              Retry
            </button>
          </>
        )}
      </div>
    </div>
  );
}
