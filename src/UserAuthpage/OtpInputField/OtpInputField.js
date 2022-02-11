import React, { useState, useEffect, useCallback } from "react";
import './Otpfields.scss'

export const OtpInputField = props => {
  const [firstDigit, setFirstDigit] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [thirdDigit, setThirdDigit] = useState("");
  const [fourthDigit, setFourthDigit] = useState("");
  const [fifthDigit, setFifthDigit] = useState("");
  const [sixthDigit, setSixthDigit] = useState("");

  const firstDigitRef = React.useRef(null);
  const secondDigitRef = React.useRef(null);
  const thirdDigitRef = React.useRef(null);
  const fourthDigitRef = React.useRef(null);
  const fifthDigitRef = React.useRef(null);
  const sixthDigitRef = React.useRef(null);

  const setFocus = useCallback(
    focusEle => {
      switch (focusEle) {
        case "secondDigit":
          if (secondDigit === "")
            secondDigitRef.current && secondDigitRef.current.focus();
          break;
        case "thirdDigit":
          if (thirdDigit === "")
            thirdDigitRef.current && thirdDigitRef.current.focus();
          break;
        case "fourthDigit":
          if (fourthDigit === "")
            fourthDigitRef.current && fourthDigitRef.current.focus();
          break;
        case "fifthDigit":
          if (fifthDigit === "")
            fifthDigitRef.current && fifthDigitRef.current.focus();
          break;
        case "sixthDigit":
          if (sixthDigit === "")
            sixthDigitRef.current && sixthDigitRef.current.focus();
          break;
        default:
          break;
      }
    },
    [secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit]
  );

  useEffect(() => {
    firstDigitRef.current && firstDigitRef.current.focus();
  }, []);

  useEffect(() => {
    const get_otp =
      firstDigit +
      secondDigit +
      thirdDigit +
      fourthDigit +
      fifthDigit +
      sixthDigit;
    props.onChange(get_otp);
  });

  useEffect(() => {
    firstDigit !== "" && setFocus("secondDigit");
  }, [firstDigit, setFocus]);

  useEffect(() => {
    secondDigit !== "" && setFocus("thirdDigit");
  }, [secondDigit, setFocus]);

  useEffect(() => {
    thirdDigit !== "" && setFocus("fourthDigit");
  }, [thirdDigit, setFocus]);

  useEffect(() => {
    fourthDigit !== "" && setFocus("fifthDigit");
  }, [fourthDigit, setFocus]);

  useEffect(() => {
    fifthDigit !== "" && setFocus("sixthDigit");
  }, [fifthDigit, setFocus]);

  const onChangeInput = (inputEle, inputVal) => {
    if (inputVal) {
      const digit = inputVal.slice(inputVal.length - 1);
      switch (inputEle) {
        case "firstDigit":
          setFirstDigit(digit);
          break;
        case "secondDigit":
          setSecondDigit(digit);
          break;
        case "thirdDigit":
          setThirdDigit(digit);
          break;
        case "fourthDigit":
          setFourthDigit(digit);
          break;
        case "fifthDigit":
          setFifthDigit(digit);
          break;
        case "sixthDigit":
          setSixthDigit(digit);
          break;
        default:
          break;
      }
    }
  };

  const handleFocus = e => {
    e.persist();
    const temp = e.target.value;
    setTimeout(() => {
      e.target.value = "";
      e.target.value = temp;
    }, 10);
  };

  return (
    <div className="container">
      <input
        type="number"
        className="input"
        ref={firstDigitRef}
        value={firstDigit}
        onFocus={handleFocus}
        onChange={e => onChangeInput("firstDigit", e.target.value)}
      />
      <input
        type="number"
        className="input"
        ref={secondDigitRef}
        value={secondDigit}
        onFocus={handleFocus}
        onChange={e => onChangeInput("secondDigit", e.target.value)}
      />
      <input
        type="number"
        className="input"
        ref={thirdDigitRef}
        value={thirdDigit}
        onFocus={handleFocus}
        onChange={e => onChangeInput("thirdDigit", e.target.value)}
      />
      {props.noOfInputs >= 4 && (
        <input
          type="number"
          className="input"
          ref={fourthDigitRef}
          value={fourthDigit}
          onFocus={handleFocus}
          onChange={e => onChangeInput("fourthDigit", e.target.value)}
        />
      )}
      {props.noOfInputs >= 5 && (
        <input
          type="number"
          className="input"
          ref={fifthDigitRef}
          value={fifthDigit}
          onFocus={handleFocus}
          onChange={e => onChangeInput("fifthDigit", e.target.value)}
        />
      )}
      {props.noOfInputs >= 6 && (
        <input
          type="number"
          className="input"
          ref={sixthDigitRef}
          value={sixthDigit}
          onFocus={handleFocus}
          onChange={e => onChangeInput("sixthDigit", e.target.value)}
        />
      )}
    </div>
  );
};


