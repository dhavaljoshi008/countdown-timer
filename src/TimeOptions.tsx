export function TimeOptions({
    id,
    name,
    label,
    maxCount,
    value,
    onChange,
    disabled
  }: {
    id: string;
    name: string;
    label: string;
    maxCount: number;
    value: number;
    disabled: boolean
    onChange: (value: number) => void
  }) {
    return (
      <label className="field">
        {label}
        <select id={id} name={name} value={value} onChange={
            (e) => {
                onChange(Number(e.target.value));
                console.log(`Setting ${name} to ${e.target.value}`) /* TODO: remove */
            }
            } disabled={disabled}>
          {Array.from({ length: maxCount + 1 }, (_, i) => (
            <option key={i} value={i}>
              {" "}
              {String(i).padStart(2, "0")}
            </option>
          ))}
        </select>
      </label>
    );
  }