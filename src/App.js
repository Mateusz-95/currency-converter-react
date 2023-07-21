import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import { useFetchData } from "./useFetchData";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const { isError, isLoading, ratesData } = useFetchData();

  const calculateResult = (amount, currency) =>
    currency === "" ? "" : setResult((amount / currency).toFixed(2));

  if (isLoading) {
    return (
      <>
        <Container>
          <Loading
            contentText="Sekundka... <br></br> Ładuję kursy walut z Europejskiego Banku
        Centralnego... 😎"
          ></Loading>
        </Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Container>
          <Loading
            errorContent
            contentText="Hmmm... Coś poszło nie tak 🤯 Sprawdź, czy masz połączenie z internetem. </br>
        Jeśli masz... to wygląda na to, ze to nasza wina. Moze spróbuj później? 🤪
        "
          ></Loading>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Form
          amount={amount}
          currency={currency}
          setAmount={setAmount}
          setCurrency={setCurrency}
          calculateResult={calculateResult}
          ratesData={ratesData}
        />
        <Result result={result} />
      </Container>
    </>
  );
}

export default App;
