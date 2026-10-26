import { useState } from "react";
import "./App.css";
import { TimeOptions } from "./TimeOptions";
import { FlipClock } from "./FlipClock";

function App() {
  const HOUR_OPTIONS_COUNT = 23; // 23:59:59
  const MIN_OPTIONS_COUNT = 59;
  const SEC_OPTIONS_COUNT = 59;
  const INITIAL_HOURS = 0;
  const INITIAL_MINUTES = 0;
  const INITIAL_SECONDS = 0;

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function reset() {
    setHours(INITIAL_HOURS);
    setMinutes(INITIAL_MINUTES);
    setSeconds(INITIAL_SECONDS);
  }

  return (
    <main className="app">
      <header className="app-header">
        <div className="controls">
          <div className="inputs">
            <TimeOptions
              id="hours"
              name="hours"
              label="Hours"
              maxCount={HOUR_OPTIONS_COUNT}
              value={hours}
              onChange={setHours}
            />
            <TimeOptions
              id="minutes"
              name="minutes"
              label="Minutes"
              maxCount={MIN_OPTIONS_COUNT}
              value={minutes}
              onChange={setMinutes}
            />
            <TimeOptions
              id="seconds"
              name="seconds"
              label="Seconds"
              maxCount={SEC_OPTIONS_COUNT}
              value={seconds}
              onChange={setSeconds}
            />
          </div>
          <div className="actions">
            <button className="btn btn-primary">Start</button>
            <button className="btn btn-secondary" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </header>
      <FlipClock hours={hours} minutes={minutes} seconds={seconds}></FlipClock>
    </main>
  );
}

export default App;
