import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getTime } from "../../util/time";
import { IEvent } from "./Event";

export interface TimersState {
  id: number;
  queue: IEvent[];
  log: string;
}

function getEventLogString(event: IEvent): string {
  return `${getTime()}: ${event.delay} / ${event.pressed}`;
}

const initialState: TimersState = {
  id: 3,
  queue: [],
  log: "",
};

export const TimersSlice = createSlice({
  name: "timers",
  initialState: initialState,
  reducers: {
    run: (state, action: PayloadAction<number>) => {
      state.id++;
      const event = {
        id: state.id,
        delay: action.payload,
        pressed: getTime(),
      };
      state.queue.push(event);
    },
    handled: (state, action: PayloadAction<number>) => {
      if (state.queue.length > 0 && state.queue[0].id === action.payload) {
        const event = state.queue.shift();
        state.log +=
          (state.log.length > 0 ? "\n" : "") + getEventLogString(event!);
      }
    },
    clearLog: (state) => {
      state.log = "";
    },
  },
});

export const selectQueue = (state: RootState) => state.timers.queue;
export const selectLog = (state: RootState) => state.timers.log;

export const { run, handled, clearLog } = TimersSlice.actions;

export default TimersSlice.reducer;
