import { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {

  const [value, setValue] = useState("");

  const add = (symbol) => {
    setValue((prev) => prev + symbol);
  };

  const clear = () => {
    setValue("");
  };

  const removeLast = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Ошибка");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = "0123456789+-*/.";

      if (allowedKeys.includes(e.key)) {
        add(e.key);
      }

      if (e.key === "Enter") {
        calculate();
      }

      if (e.key === "Backspace") {
        removeLast();
      }

      if (e.key === "Escape") {
        clear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value]);

  return (
    <div className="section">
      <div className="calculator">
        <input type="text" value={value} readOnly />

        <div className="numbers">
          <button className="num" onClick={() => add("1")}>1</button>
          <button className="num" onClick={() => add("2")}>2</button>
          <button className="num" onClick={() => add("3")}>3</button>
          <button className="num" onClick={() => add("/")}>/</button>
        </div>

        <div className="numbers">
          <button className="num" onClick={() => add("4")}>4</button>
          <button className="num" onClick={() => add("5")}>5</button>
          <button className="num" onClick={() => add("6")}>6</button>
          <button className="num" onClick={() => add("*")}>*</button>
        </div>

        <div className="numbers">
          <button className="num" onClick={() => add("7")}>7</button>
          <button className="num" onClick={() => add("8")}>8</button>
          <button className="num" onClick={() => add("9")}>9</button>
          <button className="num" onClick={() => add("-")}>-</button>
        </div>

        <div className="numbers">
          <button className="num" onClick={() => add(".")}>.</button>
          <button className="num" onClick={() => add("0")}>0</button>
          <button className="num" onClick={calculate}>=</button>
          <button className="num" onClick={() => add("+")}>+</button>
        </div>

        <button className="num-clear" onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default Calculator