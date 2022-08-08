import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const Modal = ({ largeImageURL, tags, togleModal }) => {
  const onBackdropClick = (e) => {
    e.target === e.currentTarget && togleModal();
  };

  const onBtnClickEscape = (e) => {
    if (e.code === "Escape") {
      togleModal();
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    window.addEventListener("keydown", onBtnClickEscape);

    return () => {
      const body = document.querySelector("body");
      body.style.overflow = "auto";

      window.removeEventListener("keydown", onBtnClickEscape);
    };
    // eslint-disable-next-line
  }, [onBtnClickEscape()]);

  return (
    <div className={s.overlay} onClick={onBackdropClick}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  togleModal: PropTypes.func,
  largeImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default Modal;
