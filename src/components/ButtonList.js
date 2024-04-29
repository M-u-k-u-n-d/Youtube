import Button from "./Button";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/fontawesome-free-solid";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Gaming",
  "Songs",
  "Gaming",
  "Songs",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Spritual",
  "Bhajan",
  "Krishna",
  "Sadhan",
];

function generateRandomNumber() {
  return Math.floor(Math.random() * 100000000);
}

const ButtonList = () => {
  const [arrowDisable, setArrowDisable] = useState(true);
  const elementRef = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className="flex w-[70vw] m-auto mt-16 mr-16">
      <button
        className=""
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 100, -10);
        }}
        disabled={arrowDisable}
      >
        {
          !arrowDisable &&  <FontAwesomeIcon icon={faArrowCircleLeft} />
        }
      </button>
      <div className="overflow-hidden flex" ref={elementRef}>
        {list.map((i) => (
          <Button key={generateRandomNumber()} name={i} />
        ))}
      </div>
      <button
        className=""
        onClick={() => {
          handleHorizantalScroll(elementRef?.current, 25, 100, 10);
        }}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </button>
    </div>
  );
};

export default ButtonList;
