import PropTypes from "prop-types";
import { useState } from "react";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput.trim() === "") {
      alert("what are you want?");
      return;
    }

    onSubmit(searchInput, page);
    setSearchInput("");
    setPage(1);
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={searchInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
