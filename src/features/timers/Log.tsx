import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectLog } from "./timersSlice";

export default function Log() {
  const log = useAppSelector(selectLog);

  return (
    <div className="logs">
      <h2>Логи</h2>
      <div style={{ whiteSpace: "pre-wrap" }}>{log}</div>
    </div>
  );
}
