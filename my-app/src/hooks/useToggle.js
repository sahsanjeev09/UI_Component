import { useState } from "react";

/**
 * useToggle Hook
 * ---------------------------
 * A simple custom hook to toggle between true/false or two custom values.
 *
 * @param {boolean | any[]} initialValue - Boolean or [onValue, offValue]
 *
 * @returns {object} {
 *   value,     // Current value
 *   toggle,    // Function to toggle between states
 *   setValue   // Function to set manually
 * }
 */
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(
    Array.isArray(initialValue) ? initialValue[1] : initialValue
  );

  const toggle = () => {
    if (Array.isArray(initialValue)) {
      setValue((prev) => (prev === initialValue[0] ? initialValue[1] : initialValue[0]));
    } else {
      setValue((prev) => !prev);
    }
  };

  return { value, toggle, setValue };
}
