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

  return (
    <div className="outputs">
      <div className="output-boxes">
        <OutputBox span="Tip Amount" value={tipAmount.toFixed(2)} />
        <OutputBox span="Total" value={total.toFixed(2)} />
      </div>
      <Button reset>RESET</Button>
    </div>
  );
};

export default Outputs;
