import style from './Search.module.css';

const Search = ({ value, setValue }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="🔎"
        value={value}
        onChange={handleChange}
        className={style.input}
      />
    </div>
  );
};

export { Search };
