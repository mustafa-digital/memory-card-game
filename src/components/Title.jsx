export function Title() {
  const body = document.querySelector('body');
  body.style.background =
    'url("src/assets/Images/986b40b07ff496b8ef2dffcab76192be (1).png")';
  return (
    <div className="title-heading-wrapper">
      <h1 className="title">DigiMemory</h1>
      <h2 className="subheading">A digimon memory card game</h2>
    </div>
  );
}
