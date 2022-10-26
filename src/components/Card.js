const Card = ({ name, email, hashedName }) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img
      src={`https://robohash.org/${hashedName}.png?set=set3&size=200x200`}
      alt="robot"
    />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
