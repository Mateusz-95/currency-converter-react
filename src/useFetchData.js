import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
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
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
          console.error(error);
        }
      };
      fetchRates();
    }, 2000);
  }, []);

  return {
    ratesData,
    isLoading,
    isError,
  };
};
