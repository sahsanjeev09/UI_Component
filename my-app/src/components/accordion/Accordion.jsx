import React, { useState, useRef } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({
  items = [],
  allowMultipleOpen = false,
  className = "",
  itemClass = "",
  transitionSpeed = 250, 
  rounded = true,
  border = true,
}) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div
      className={`${styles.accordion} ${className} ${
        rounded ? styles.rounded : ""
      }`}
    >
      {items.map((item, index) => {
        const ref = useRef(null);
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              border ? styles.withBorder : ""
            } ${itemClass}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              style={{ transitionDuration: `${transitionSpeed}ms` }}
            >
              <span>{item.title}</span>
              <span
                className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                style={{ transitionDuration: `${transitionSpeed}ms` }}
              >
                ▶
              </span>
            </button>

            <div
              ref={ref}
              className={styles.accordionContent}
              style={{
                maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
                transitionDuration: `${transitionSpeed}ms`,
              }}
            >
              <div className={styles.contentInner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
