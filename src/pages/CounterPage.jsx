import React, { useState } from "react";
import { Link } from "react-router-dom";

const CounterPage = () => {
  const [valor, cambiaValor] = useState(0);

  const increment = () => {
    console.log("Click");
    cambiaValor(valor + 1);
  };

  const decrement = () => {
    if (valor > 0) {
      console.log("Click");
      cambiaValor(valor - 1);
    }
  };

  return (
    <>
      <h1> {valor} </h1>
      <button onClick={increment}> Incrementar </button>
      <button onClick={decrement}> Decrementar </button>
      <br />
      <Link to="/">Home</Link>
    </>
  );
};

export default CounterPage;
