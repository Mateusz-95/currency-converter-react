import "./style.css";
import { currencies } from "./currencies";
import Clock from "../Clock";

const Form = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  calculateResult,
  clock,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <div>
          <Clock />
          <label>
            <span className="form__labelText">
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
            </span>
            <input
              className="form__field"
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
          <button className="form__button">Przelicz</button>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
