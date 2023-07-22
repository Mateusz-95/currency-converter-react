import { ResultContainer, ResultSpan } from "./styled";

const Result = ({ result }) => {
  return (
    <ResultContainer>
      Wynik: <br />
      <ResultSpan>{` ${result} `}</ResultSpan>
      zł
    </ResultContainer>
  );
};

export default Result;
