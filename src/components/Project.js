import React from 'react';
import Slider from "react-slick";
import ProjectElement from './ProjectAPI';
import Loader from './Loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowLeft = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow-left`}
    style={{ ...style, display: 'block', color: 'var(--arrow-color)' }}
    onClick={onClick}
  />
);

const ArrowRight = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-arrow-right`}
    style={{ ...style, display: 'block', color: 'var(--arrow-color)' }}
    onClick={onClick}
  />
);

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards for medium devices
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card for small devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card for very small devices
          arrows: false,   // Optionally hide arrows for small screens
        },
      },
    ],
  };

  return (
    <>
      <Loader />
      <div className='Project-container'>
        <h2 className='Project-heading'>My Projects</h2>
        <Slider {...settings}>
          {ProjectElement.map((project) => (
            <div key={project.id} style={{ padding: "10px" }}>
              <div className="card">
                <div className="p-img-contain">
                  <img
                    src={project.img}
                    alt={project.alt}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body">
                  <div className="p-text-contain">
                    <h5 className='p-title'>{project.heading}</h5>
                    <span className="badge">{project.label}</span>
                  </div>
                  <p>{project.description}</p>
                  <a
                    href={project.explore_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-card-btn"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Project;
