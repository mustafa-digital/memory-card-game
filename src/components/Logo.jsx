export function Logo({ showSprite = true }) {
  return (
    <>
      <div className={showSprite ? 'logo' : 'logo-game'}>
        <img
          className="digimon-logo"
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
