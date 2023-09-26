import { useState } from "react";

export default function useToggle(
  defaultValue: boolean = false
): [boolean, (value?: boolean) => void] {
  const [toggle, setToggle] = useState(defaultValue);

  function handleToggle(value?: boolean) {
    setToggle((prev) => (typeof value === "boolean" ? value : !prev));
  }

  return [toggle, handleToggle];
}
