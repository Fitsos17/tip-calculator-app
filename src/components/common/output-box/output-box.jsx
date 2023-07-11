import "./output-box.css";

const OutputBox = ({ span, value }) => {
  return (
    <div className="box">
      <div>
        <p className="output-label">{span}</p>
        <span className="output-span">/ person</span>
      </div>
      <h1 className="money">${value}</h1>
    </div>
  );
};

export default OutputBox;
