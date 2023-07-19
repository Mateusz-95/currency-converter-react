import React, { useEffect, useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [ratesData, setRatesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const fetchRates = async () => {
        try {
          const response = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );
          const ratesData = response.data;
          setRatesData(ratesData);
          setIsLoading(false);
          console.log(ratesData);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
          console.error(error);
        }
      };
      fetchRates();
    }, 2000);
  }, []);

  const calculateResult = (amount, currency) =>
    currency === "" ? "" : setResult((amount / currency).toFixed(2));

  if (isLoading) {
    return (
      <Container>
        <Loading
          contentText="Sekundka... <br></br> Ładuję kursy walut z Europejskiego Banku
        Centralnego... 😎"
        ></Loading>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Loading
          errorContent
          contentText="Hmmm... Coś poszło nie tak 🤯 Sprawdź, czy masz połączenie z internetem. </br>
        Jeśli masz... to wygląda na to, ze to nasza wina. Moze spróbuj później? 🤪
        "
        ></Loading>
      </Container>
    );
  }

  return (
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
  );
}

export default App;
