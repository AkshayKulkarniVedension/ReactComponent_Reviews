import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  function prevPerson() {
    setIndex(function (prevIndex) {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  }

  function nextPerson() {
    setIndex(function (prevIndex) {
      let newIndex = prevIndex + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  function randomPerson() {
    setIndex(function (prevIndex) {
      let newIndex = Math.floor(Math.random() * people.length);
      if (prevIndex === newIndex) {
        newIndex = newIndex + 1;
      }
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
