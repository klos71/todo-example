import { useState } from "react";

export function AddItem({ addItem }: { addItem: (value: string) => void }) {
  const [value, setvalue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder="What do you need to do?"
      />
      <button onClick={() => addItem(value)}>Add</button>
    </div>
  );
}
