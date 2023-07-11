import "./inputs.css";

import Label from "../common/label/label";
import Input from "../common/input/input";
import Button from "../common/button/button";
import { BILL_ID, NUMBER_OF_PEOPLE, TIP_VALUES, CUSTOM } from "../../constants";

import { ReactComponent as DollarIcon } from "../../assets/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "../../assets/icon-person.svg";

import { useState, useEffect, useRef } from "react";

const Inputs = ({ setCompleteObject }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState();
  const [numOfPeopleAreZero, setNumOfPeopleAreZero] = useState(false);

  // Set states on blur input
  const blurBill = (e) => setBill(e.target.value);
  const blurTip = (e) => setTip(e.target.value);
  const blurNumOfPeople = (e) => {
    if (e.target.value === "0") {
      setNumOfPeopleAreZero(true);
    } else {
      setNumOfPeopleAreZero(false);
      setNumOfPeople(e.target.value);
    }
  };

  // Set state on click of button
  const clickTip = (e) => {
    // To get number without the % sign
    setTip(e.target.textContent.split("%").join(""));
  };

  useEffect(() => {
    if (bill && tip && !numOfPeople) {
      setNumOfPeopleAreZero(true);
    }
    if (bill && tip && numOfPeople) {
      setCompleteObject({ bill, tip: tip / 100, numOfPeople });
    }
  }, [bill, tip, numOfPeople]);

  return (
    <div className="inputs">
      <div className="bill input-div">
        <Label htmlFor={BILL_ID}>Bill</Label>
        <Input
          id={BILL_ID}
          onBlurHandler={blurBill}
          Icon={<DollarIcon className="icon" />}
        />
      </div>

      <div className="tip input-div">
        <Label htmlFor={CUSTOM}>Select Tip %</Label>
        <div className="tip-buttons">
          {TIP_VALUES.map((tip) => (
            <Button key={tip} onClickHandler={clickTip}>
              {tip}%
            </Button>
          ))}
          <Input custom id={CUSTOM} onBlurHandler={blurTip} />
        </div>
      </div>

      <div className="number-of-people input-div">
        <div className="labels-number-of-people">
          <Label htmlFor={NUMBER_OF_PEOPLE}>Number of People</Label>
          <Label
            additionalStyles={{ color: "orange" }}
            disappear={!numOfPeopleAreZero ? true : false}
            htmlFor={NUMBER_OF_PEOPLE}
          >
            Can't be zero
          </Label>
        </div>
        <Input
          id={NUMBER_OF_PEOPLE}
          additionalStyles={
            numOfPeopleAreZero ? { border: "2px solid orange" } : {}
          }
          onBlurHandler={blurNumOfPeople}
          Icon={<PersonIcon className="icon" />}
        />
      </div>
    </div>
  );
};

export default Inputs;
