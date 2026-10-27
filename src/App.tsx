import { useState, useEffect } from "react";
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
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }

    const id = setInterval(() => {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
      if (totalSeconds <= 0) {
        setRunning(false);
        setStarted(false);
        setFinished(true);
      }
    }, 1000);

    return () => clearInterval(id);
  }, [running, hours, minutes, seconds]);

  function reset() {
    setRunning(false);
    setStarted(false);
    setFinished(false);
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
              disabled={running}
            />
            <TimeOptions
              id="minutes"
              name="minutes"
              label="Minutes"
              maxCount={MIN_OPTIONS_COUNT}
              value={minutes}
              onChange={setMinutes}
              disabled={running}
            />
            <TimeOptions
              id="seconds"
              name="seconds"
              label="Seconds"
              maxCount={SEC_OPTIONS_COUNT}
              value={seconds}
              onChange={setSeconds}
              disabled={running}
            />
          </div>
          <div className="actions">
          <button
  className="btn btn-primary"
  disabled={!running && hours === 0 && minutes === 0 && seconds === 0}
  onClick={() => {
    if (running) {
      setRunning(false);          // pause
    } else {
      setRunning(true);           // start or resume
      setStarted(true);
      setFinished(false);
    }
  }}
>
  {running ? "Pause" : started ? "Resume" : "Start"}
</button>
            <button className="btn btn-secondary" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </header>
      <FlipClock hours={hours} minutes={minutes} seconds={seconds} paused={started && !running} finished={finished}></FlipClock>
    </main>
  );
}

export default App;
