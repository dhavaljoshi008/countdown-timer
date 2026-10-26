import { useState } from "react";

function FlipDigit({ value }: { value: number }) {
  const [shown, setShown] = useState({ current: value, previous: value });

  if (shown.current !== value) {
    setShown({ current: value, previous: shown.current });
  }

  const { current, previous } = shown;
  const flipping = current !== previous;

  return (
    <div className="flip-digit" aria-hidden="true">
      <div className="half top">
        <span>{current}</span>
      </div>
      <div className="half bottom">
        <span>{previous}</span>
      </div>
      {flipping && (
        <>
          <div key={`t${current}`} className="half top flap-top">
            <span>{previous}</span>
          </div>
          <div key={`b${current}`} className="half bottom flap-bottom">
            <span>{current}</span>
          </div>
        </>
      )}
    </div>
  );
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [tens, ones] = String(value).padStart(2, "0").split("").map(Number);

  return (
    <div className="flip-unit">
      <div className="flip-unit-digits">
        <FlipDigit value={tens} />
        <FlipDigit value={ones} />
      </div>
      <span className="flip-label">{label}</span>
    </div>
  );
}

export function FlipClock({
  hours,
  minutes,
  seconds,
  finished
}: {
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className={finished ? "flip-clock finished" : "flip-clock"}
      role="timer"
      aria-label={`${pad(hours)} hours ${pad(minutes)} minutes ${pad(
        seconds
      )} seconds`}
    >
      <FlipUnit value={hours} label="Hours" />
      <FlipUnit value={minutes} label="Minutes" />
      <FlipUnit value={seconds} label="Seconds" />
    </div>
  );
}
