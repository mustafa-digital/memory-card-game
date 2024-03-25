export function Logo({ showSprite = true, handleClick }) {
  return (
    <>
      <div
        className={showSprite ? 'logo' : 'logo-game'}
        onClick={() => handleClick('title')}
      >
        <img
          className={showSprite ? 'digimon-logo' : 'digimon-logo-game'}
          src="src/assets/Images/Digimon-Logo-Transparent.png"
          alt="digimon-logo"
        ></img>
      </div>
      {showSprite && (
        <div className="agumon-sprite-wrapper">
          <img
            className="agumon-sprite"
            src="src/assets/Images/tumblr_n320f2gHjd1sxws2ko1_500.gif"
            alt="agumon sprite walking animation"
          ></img>
        </div>
      )}
    </>
  );
}
