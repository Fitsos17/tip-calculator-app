import { useState } from "react";
import Inputs from "../inputs/inputs";
import Outputs from "../outputs/outputs";

import "./tip-calculator.css";

const TipCalculator = () => {
  const [completeObject, setCompleteObject] = useState({});

  return (
    <div className="calculator">
      <div className="wrapper">
        <Inputs setCompleteObject={setCompleteObject} />
        <Outputs completeObject={completeObject} />
      </div>
    </div>
  );
};

export default TipCalculator;
