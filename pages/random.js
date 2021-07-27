import { useEffect, useState } from "react";

// useMath hook
const useMath = (startingNumber = 0) => {
  const [number, setNumber] = useState(startingNumber);
  const add = (addNumber = 1) => setNumber(number + addNumber);
  const subtract = (subtractNumber = 1) => setNumber(number - subtractNumber);

  return { number, add, subtract };
};

const Calculator = () => {
  const { number, add, subtract } = useMath();
  return (
    <div className="mx-auto w-32 py-4">
      <div className="flex gap-4">
        <button onClick={() => add(5)} className="py-3 px-5 bg-red-100">
          Add
        </button>
        <button onClick={() => subtract(10)} className="py-3 px-5 bg-green-100">
          Subtract
        </button>
        <div>{number}</div>
      </div>
    </div>
  );
};

const RandomPage = () => {
  const { number, add, subtract } = useMath(10);

  return (
    <div>
      <Calculator />
      <Calculator />
      <Calculator />
      <Calculator />
      <Calculator />
      <Calculator />
      <Calculator />
      <Calculator />
    </div>
  );
};

export default RandomPage;
