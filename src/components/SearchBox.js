const SearchBox = ({ search, handleChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={handleChange}
        value={search}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
