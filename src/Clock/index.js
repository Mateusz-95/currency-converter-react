import { useState, useEffect } from "react";
import { ClockContainer, ClockView } from "./styled";

const formatDate = (clock) => {
  return `${clock.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  })}, ${clock.toLocaleTimeString()}`;
};

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ClockContainer>
      <ClockView>Dzisiaj jest {formatDate(clock)}</ClockView>
    </ClockContainer>
  );
};

export default Clock;
