export function GameOver({ status, resetGame, setStatus, changeScreen }) {
  return (
    <div className="game-over-screen">
      <div className="game-over-text-wrapper">
        {status === 'win' ? (
          <h1 className="game-over-text">You win!</h1>
        ) : (
          <h1 className="game-over-text">Sorry, you lose.</h1>
        )}
      </div>
      <img
        className="game-over-gif"
        src={
          status === 'win'
            ? 'src/assets/Images/digimon-adventure.gif'
            : 'src/assets/Images/digimon-agumon.gif'
        }
        alt={status + 'animation'}
      />
      <div className="game-over-btn-wrapper">
        {status === 'win' ? (
          <button
            onClick={() => {
              resetGame();
              changeScreen('title');
            }}
          >
            Continue
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
