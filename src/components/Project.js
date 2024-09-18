import React from 'react';
import Slider from "react-slick";
import ProjectElement from './ProjectAPI';
import Loader from './Loader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    <Loader/>
      <div style={{ padding: '20px' }}></div>
      <h2>My Projects</h2>
      <Slider {...settings}>
      {ProjectElement.map((project) => (
          <div key={project.id} style={{ padding: "10px" }}>
            <div className="card">
              <img
                src={project.img}
                alt={project.alt}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="card-body">
                <h5>{project.heading}</h5>
                <p>{project.description}</p>
                <span className="badge">{project.label}</span>
                <a
                  href={project.explore_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Project
