import "./style.css";

const Result = ({ result }) => {
  return (
    <p className="resultContainer">
      Wynik:
      <span className="result">{` ${result} `}</span>
      zł
    </p>
  );
};

export default Result;
