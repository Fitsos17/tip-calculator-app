import "./input.css";

const Input = ({ id, additionalStyles, custom, onBlurHandler, Icon }) => (
  <div className={`input-container ${custom ? "custom" : ""}`}>
    <input
      className={`input ${custom ? "custom" : ""} dollar`}
      id={id}
      name={id}
      placeholder={custom ? "Custom" : "0"}
      style={additionalStyles}
      type="number"
      onBlur={onBlurHandler}
    />
    {Icon ? Icon : ""}
  </div>
);

export default Input;
