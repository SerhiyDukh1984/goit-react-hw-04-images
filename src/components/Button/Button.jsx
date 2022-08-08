import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ updatePage }) => {
  return (
    <>
      <button className={s.button} type="button" onClick={updatePage}>
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};

export default Button;
