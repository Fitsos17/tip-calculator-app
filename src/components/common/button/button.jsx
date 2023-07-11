import "./button.css";

const Button = ({ children, onClickHandler, reset }) => (
  <button className={`button ${reset ? "reset" : ""}`} onClick={onClickHandler}>
    {children}
  </button>
);

export default Button;
