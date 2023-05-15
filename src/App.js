
function App() {
  return (
    <div className="container">
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Kalkulator Walut
          </legend>
          <p>
            <label>
              <span className="form__labelText">
                Kwota w <select name="chooseCurrency">
                  <option value="Euro">💶 Euro</option>
                  <option value="Dolar amerykanski">💵 Dolar amerykański</option>
                  <option value="Funt">💷 Funt</option>
                </select>
              </span>
              <input className="form__field" required step="any" type="number" min="0.1" />
            </label>
          </p>
          <p>
            <button className="form__button">Przelicz</button>
          </p>
        </fieldset>
      </form>
      <p>
        Wynik:
        <strong></strong>
        zł
      </p>
    </div>
  );
}

export default App;
