import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { IEvent } from "./Event";
import { selectQueue, handled } from "./timersSlice";

export default function TimerWrapper() {
  const queue = useAppSelector(selectQueue);

  const event = queue.length > 0 ? queue[0] : undefined;

  if (event) {
    return <Timer event={event!} />;
  } else {
    return null;
  }
}

interface TimerProps {
  event: IEvent;
}

function Timer({ event }: TimerProps) {
  const dispatch = useAppDispatch();
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  if (timeoutId === undefined) {
    const timeout = window.setTimeout(() => {
      dispatch(handled(event.id));
      setTimeoutId(undefined);
    }, event.delay * 1000);
    setTimeoutId(timeout);
  }

  return null;
}
