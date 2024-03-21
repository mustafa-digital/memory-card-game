export function Difficulty({ handleDifficultySelect }) {
  return (
    <div className="difficulty-select">
      <button onClick={() => handleDifficultySelect('easy')}>Easy</button>
      <button onClick={() => handleDifficultySelect('medium')}>Medium</button>
      <button onClick={() => handleDifficultySelect('hard')}>Hard</button>
    </div>
  );
}
