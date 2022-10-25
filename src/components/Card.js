const hashedName = (name) => {
  const len = name.length;
  let hash = 5381;

  for (let i = 0; i < len; i++) {
    hash = (hash * 33) ^ name.charCodeAt(i);
  }
  return hash >>> 0;
};

const Card = ({ name, id, email }) => {
  const imageHash = hashedName(`${id}-${name}-${email}`);

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${imageHash}?set=set3&size=200x200`}
        alt="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
