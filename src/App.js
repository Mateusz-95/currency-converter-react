import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import { useFetchData } from "./useFetchData";
import { createGlobalStyle } from "styled-components";
import background from "./share.png";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Lato", sans-serif;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 767px) {
    body {
      background-size: 100% 100vh;
      background-repeat: no-repeat;
      background-position: top;
    }
  }
`;

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
        <GlobalStyles />
        <Container>
          <Loading contentText="Sekundka... <br></br> Ładuję kursy walut z Europejskiego Banku Centralnego... 😎" />
        </Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <GlobalStyles />
        <Container>
          <Loading
            errorContent
            contentText="Hmmm... Coś poszło nie tak 🤯 Sprawdź, czy masz połączenie z internetem. </br>
          Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj później? 🤪"
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
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
