import Clock from "../Clock";
import { Button, Field, Fieldset, FormContent, Legend, Text } from "./styled";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  calculateResult,
  ratesData,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  const actualRateData = ratesData.date;

  const currencies = [
    {
      name: "💶 Euro",
      value: ratesData.rates.EUR,
      id: 1,
    },
    {
      name: "💵 Dolar amerykański",
      value: ratesData.rates.USD,
      id: 2,
    },
    {
      name: "💷 Funt",
      value: ratesData.rates.GBP,
      id: 3,
    },
  ];

  return (
    <FormContent onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator Walut</Legend>
        <div>
          <Clock />
          <label>
            <Text>
              Kwota w{" "}
              <select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                name="chooseCurrency"
              >
                <option value="">Wybierz walutę</option>
                {currencies.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </Text>
            <Field
              required
              step="any"
              type="number"
              min="0.1"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </div>
        <p>
          <Button>Przelicz</Button>
        </p>
        <p>Kursy walut pobierane są z Narodowego Banku Centralnego.</p>
        <p>
          Aktualne na dzień:<strong>{actualRateData}</strong>{" "}
        </p>
      </Fieldset>
    </FormContent>
  );
};

export default Form;
