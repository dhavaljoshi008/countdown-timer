function FlipUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flip-unit">
      {value} {label}
    </div>
  );
}

export function FlipClock({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return (
    <div className="flip-clock">
      <FlipUnit value={hours} label="Hours" />
      <FlipUnit value={minutes} label="Minutes" />
      <FlipUnit value={seconds} label="Seconds" />
    </div>
  );
}
