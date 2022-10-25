import { useEffect, useState } from "react";

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  const handleSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div id="App" className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox search={search} handleChange={handleSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
