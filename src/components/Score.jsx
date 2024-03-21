export function Score({ currentScore, maxScore }) {
  return (
    <div className="score-container">
      <h1>{currentScore}</h1>
      <span>/</span>
      <h1>{maxScore}</h1>
    </div>
  );
}
