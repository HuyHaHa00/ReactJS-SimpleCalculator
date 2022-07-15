import React from "react";
import "./App.css";
import Button from "./calculatorComponents/Button";
import { Input } from "./calculatorComponents/Input";
import { ClearButton } from "./calculatorComponents/ClearButton";
import * as math from "mathjs";

export default function App() {
  const [input, setInput] = React.useState("");
  const [justEqual, setJustEquals] = React.useState(false);

  const addToInput = (val) => {
    if (justEqual && !isNaN(val)) {
      setInput(val);
      setJustEquals(false);
    } else {
      setInput(input + val);
      setJustEquals(false);
    }
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
    setJustEquals(true);
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}
