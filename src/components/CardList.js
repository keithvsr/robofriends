import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          name={robot.name}
          email={robot.email}
          hashedName={robot.hashedName}
        />
      ))}
    </div>
  );
};

export default CardList;
