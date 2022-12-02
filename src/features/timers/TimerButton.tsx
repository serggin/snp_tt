import React from "react";

interface TimerButtonProps {
  delay: number;
  onClick: () => void;
}

export default function TimerButton({ delay, onClick }: TimerButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      Таймер {delay}
    </button>
  );
}
