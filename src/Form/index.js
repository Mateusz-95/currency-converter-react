import { useState } from "react";
import "./style.css";


const Form = ({amount, currency}) => {

  const options = [
    {
      name: "💶 Euro",
      value: 4.5,
      id: 1,
    },
    {
      name: "💵 Dolar amerykański",
      value: 4.14,
      id: 2,
    },
    {
      name: "💷 Funt",
      value: 5.19,
      id: 3,
    },
  ];

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  return (
    <form
      onSubmit={onFormSubmit}
      className="form"
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator Walut
        </legend>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w <select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                name="chooseCurrency"
              >
                <option value="">Wybierz walutę</option>
                {options.map(option =>
                  <option
                    key={option.id}
                    value={option.value}
                  >
                    {option.name}
                  </option>
                )}
              </select>
            </span>
            <input
              className="form__field"
              required step="any"
              type="number"
              min="0.1"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
      </fieldset>
    </form>
  )
};

export default Form;