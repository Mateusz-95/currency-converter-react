import { useState, useEffect } from "react";
import "./style.css";

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
    <div className="form__clockContainer">
      <span className="form__clock">Dzisiaj jest {formatDate(clock)}</span>
    </div>
  );
};

export default Clock;
