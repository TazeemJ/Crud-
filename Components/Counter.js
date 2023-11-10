"use client";
import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function addVal() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function revmove() {
    setNumber((prevNumber) => prevNumber - 1);
  }
  return (
    <div>
      <h2 className="bg-red-200">Your number is {number}</h2>
      <button onClick={revmove} className="bg-red-500 w-48">
        -
      </button>
      <button onClick={addVal}>+</button>
    </div>
  );
};

export default Counter;
