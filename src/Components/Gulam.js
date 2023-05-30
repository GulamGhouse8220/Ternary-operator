import React from "react";
import { useState } from "react";

function Gulam() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse}>
        <h3>
          Experience{" "}
          <span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M8.59 8l4.58 4.59L18.17 8 19.59 9.41 13 16l-6.59-6.59L8.59 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 17.59L4.41 12 10 6.41 11.41 7.82 7.63 11.59H20v1.82H7.58l3.79 3.76z" />
              </svg>
            )}
          </span>
        </h3>
      </div>
      {isOpen && (
        <div>
          <input type="range" min="0" max="100" />
        </div>
      )}
    </div>
  );
}

export default Gulam;