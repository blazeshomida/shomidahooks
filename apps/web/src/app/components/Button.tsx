"use client";
import { useToggle } from "shomidahooks";
export default function Button() {
  const [state, setState] = useToggle(false);
  return (
    <button
      type="button"
      onClick={() => setState()}
    >
      The state is {String(state)}
    </button>
  );
}
