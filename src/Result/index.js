import { useState } from "react";
import {calculateResult} from "./App.js";


const Result = () => {

  const [result, setResult] = useState("");

  return (
    <p>
      Wynik:
      <strong>{result}</strong>
      zł
    </p>
  )
};

export default Result;
