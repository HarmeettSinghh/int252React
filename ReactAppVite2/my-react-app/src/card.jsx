import profile from './assets/profile.png';

function Card() {
  return (
    <div className="card">
      <img className="CardImage" src="https://picsum.photos/150" alt="profilepicture" />
      
      <h2>Harmeet</h2>
      <p>I am a BTech student and I am liking React JS</p>
    </div>
  );
}

export default Card;
