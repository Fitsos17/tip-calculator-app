import "./outputs.css";

import OutputBox from "../common/output-box/output-box";
import Button from "../common/button/button";
import { useEffect, useState } from "react";

const Outputs = ({ completeObject }) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if ("bill" in completeObject) {
      const { bill, tip, numOfPeople } = completeObject;
      setTipAmount((bill * tip) / numOfPeople);
      setTotal(bill / numOfPeople + tipAmount);
    }
  }, [completeObject]);

  // I refresh the page, because if we refresh, the state will be purged.
  // By doing this, we do not have to create a state on "../tip-calculator/tip-calculator.jsx"
  // and pass it on "Inputs" and this component
  const setResetHandler = () => window.location.reload(true);

  return (
    <div className="outputs">
      <div className="output-boxes">
        <OutputBox span="Tip Amount" value={tipAmount.toFixed(2)} />
        <OutputBox span="Total" value={total.toFixed(2)} />
      </div>
      <Button reset onClickHandler={setResetHandler}>
        RESET
      </Button>
    </div>
  );
};

export default Outputs;
