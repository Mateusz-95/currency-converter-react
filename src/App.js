import React, { useEffect, useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [clock, setClock] = useState("");


  const calculateResult = (amount, currency) => currency === "" ? "" : setResult((amount * currency).toFixed(2));

  const createFullDate = () => {
    const actualDate = new Date();
    setClock(`${actualDate.toLocaleDateString(
      undefined,
      {
        month: "long", weekday: "long", day: "numeric", year: "numeric"
      })}, ${actualDate.toLocaleTimeString()}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      createFullDate();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [clock]);

  useEffect(() => {
    createFullDate()
  }, []);


  return (
    <Container>
      <Form
        amount={amount}
        currency={currency}
        setAmount={setAmount}
        setCurrency={setCurrency}
        calculateResult={calculateResult}
        clock={clock}
      />
      <Result
        result={result}
      />
    </Container>
  );
}

export default App;

