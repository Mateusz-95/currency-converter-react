import { useState, useEffect } from "react";
import { ClockContainer, ClockView } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (clock) => {
  return `${clock.toLocaleDateString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  })}, ${clock.toLocaleTimeString()}`;
};

const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      <ClockView>Dzisiaj jest {formatDate(date)}</ClockView>
    </ClockContainer>
  );
};

export default Clock;
