import Container from "./Container";
import Form from "./Form";
import Result, {setResult} from "./Result";

function App() {
  const calculateResult = setResult((amount, currency) => amount * currency);

  return (
    <Container>
      <Form
      calculateResult={calculateResult}
      />
      <Result />
    </Container>
  );
}

export default App;

