import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => currency === "" ? "" : setResult((amount * currency).toFixed(2));

  return (
    <Container>
      <Form
        amount={amount}
        currency={currency}
        setAmount={setAmount}
        setCurrency={setCurrency}
        calculateResult={calculateResult}
      />
      <Result
        result={result}
      />
    </Container>
  );
}

export default App;

