import React from "react";
import { useAppDispatch } from "../../app/hooks";
import Log from "./Log";
import Timer from "./Timer";
import TimerButton from "./TimerButton";
import { run, clearLog } from "./timersSlice";

export default function Timers() {
  const delays = [1, 2, 3, 4];
  const dispatch = useAppDispatch();

  const runTimer = (delay: number) => {
    dispatch(run(delay));
  };

  return (
    <div className="timers">
      <div className="buttons">
        <div className="timer-buttons">
          {delays.map((delay, index) => (
            <TimerButton
              key={index}
              delay={delay}
              onClick={() => runTimer(delay)}
            />
          ))}
        </div>
        <button type="button" onClick={() => dispatch(clearLog())}>
          Сбросить
        </button>
      </div>
      <Timer />
      <Log />
    </div>
  );
}
