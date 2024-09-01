import React from 'react'
import { useEffect, useState } from 'react';

const HomeTyping = () => {
    const words = [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "Freelancer",
      ];
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
      const [currentText, setCurrentText] = useState("");
      const [isDeleting, setIsDeleting] = useState(false);
      const [chartIndex, setChartIndex] = useState(0);
    
      useEffect(() => {
        const type = () => {
          const currentWord = words[currentWordIndex];
          const updatedText = isDeleting
            ? currentWord.substring(0, chartIndex - 1)
            : currentWord.substring(0, chartIndex + 1);
    
          setCurrentText(updatedText);
    
          if (!isDeleting && updatedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
    
          setChartIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
        };
    
        const typingSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(type, typingSpeed);
    
        return () => clearTimeout(timeout);
      }, [currentText, isDeleting, chartIndex, words, currentWordIndex]);
  return (
    <>
      <section className="section-home">
        <div className="index-text-section">
          <div className="heading-contain">
            <h2>
              Hello <br />
              i'm Sandeep
            </h2>
            <h2 className="typewritter">{currentText}</h2>
          </div>
          <p className="text-contain-index-pera">
            Passionate frontend developer excelling in crafting visually
            captivating, user-friendly interfaces. Proficient in HTML, CSS,
            JavaScript, and responsive design. Demonstrates exceptional
            problem-solving abilities and meticulous attention to detail.
          </p>
          <div className="button-index-contain">
            <button type="button" id="Openlink">
              free courses
            </button>
            <button type="button" id="Closelink">
              explore blog
            </button>
          </div>
        </div>
        <div className="img-index-contain">
          <img
            src="https://i.ibb.co/Fq4ydqx/Pics-Art-03-18-copy.jpg"
            alt="basepfodle"
            id="img-main"
          />
        </div>
      </section>
    </>
  )
}

export default HomeTyping;
