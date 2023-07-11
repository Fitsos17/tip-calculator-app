import "./label.css";

const Label = ({ children, htmlFor, additionalStyles, disappear }) => (
  <label
    className={`label ${disappear ? "disappear" : ""}`}
    htmlFor={htmlFor}
    style={additionalStyles}
  >
    {children}
  </label>
);

export default Label;
