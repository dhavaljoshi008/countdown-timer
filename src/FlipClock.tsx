function FlipDigit({ value } : { value : number }) {
    return <div className="flip-digit">{ value } </div>;
}



function FlipUnit({ value, label }: { value: number; label: string }) {

    const[tens, ones] = String(value).padStart(2, "0").split("").map(Number);

  return (
    <div className="flip-unit">
        <div className="flip-unit-digits">
            <FlipDigit value={tens}/>
            <FlipDigit value={ones}/>
        </div>
        <span className="flip-label">{label}</span>
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
