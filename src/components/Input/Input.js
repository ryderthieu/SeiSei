import React, { useState, useRef, useEffect } from "react";
import styles from "./Input.module.scss";

const SelectInput = ({ label, placeholder, options = [], multi = false }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleOption = (option) => {
    if (multi) {
      setSelectedValues((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option) 
          : [...prev, option] 
      );
    } else {
      setSelectedValues([option]);
      setIsOpen(false);
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.selectContainer} ref={dropdownRef}>
      <label className={styles.label}>{label}</label>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
        onClick={handleToggleDropdown}
      >
        <div className={styles.selectedPlaceholder}>
          {selectedValues.length > 0
            ? selectedValues.join(", ")
            : placeholder}
        </div>
        <div className={styles.arrow}></div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => handleToggleOption(option)}
            >
              {multi ? (
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedValues.includes(option)}
                    onChange={() => handleToggleOption(option)}
                  />
                  <span>{option}</span>
                </label>
              ) : (
                <span>{option}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SelectInput };
