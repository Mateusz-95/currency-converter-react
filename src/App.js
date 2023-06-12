import React, { useEffect, useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [clock, setClock] = useState(new Date());

  const calculateResult = (amount, currency) =>
    currency === "" ? "" : setResult((amount * currency).toFixed(2));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [clock]);

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
      <Result result={result} />
    </Container>
  );
}

export default App;
