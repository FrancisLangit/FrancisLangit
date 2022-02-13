const Search = ({ value, setValue }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export { Search };
