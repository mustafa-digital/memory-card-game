import Tilt from 'react-parallax-tilt';

export function Card({ name, image, onClick, id, className }) {
  return (
    <Tilt className="card-tilt-container">
      <div className="memory-card-container">
        <div className={'memory-card ' + className} data-id={id}>
          <div className="memory-card-front" onClick={onClick}>
            <h2 className="digimon-name">{name}</h2>
            <img className="digimon-img" src={image} alt={name} />
          </div>

          <div className="memory-card-back">
            <img
              className="memory-card-back-img"
              src="assets/Images/de9049f6ac9d6e09357770167bd9b3400f873cc5r4-444-250_00.gif"
              alt="back of card"
            />
            <img
              className="card-logo"
              src="assets/Images/kisspng-terriermon-renamon-impmon-digimon-logo-digimon-5ac2b819c54917.9394162015227105538081.png"
              alt="card logo image"
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
