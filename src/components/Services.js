import React from 'react';
import Loader from './Loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PureServicesData from './ServicesAPI';
import ServicesForm from './ServicesForm';
import GitHubActivityChart from './Chart';

const Services = () => {
  const settings = {
    dots: true, // Keep dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable arrows for all screen sizes
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Loader />
      <h2 className='main-title'>Our Services</h2>
      <Slider {...settings}>
        {PureServicesData.map((e) => (
          <div key={e.id} style={{ padding: '10px' }}>
            <div className="s-card">
              <div className="s-img-contain">
                <img src={e.img} alt='Services Img' />
              </div>
              <div className="s-card-body">
                <div className="s-text-contain">
                  <h5 className="s-title">{e.title}</h5>
                  <a href={e.link} className="c-card-info-btn">
                    <i className='bx bx-info-circle'></i>
                  </a>
                </div>
                <p>{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h2 className="main-title-2">Enter Your Requirements</h2>
      <div className="form-container">
        <ServicesForm/>
      </div>
      <div className="chart-container">
      <h1 className='timelinetitle'>My Roadmap</h1>
        <GitHubActivityChart/>
      </div>
    </div>
  );
};

export default Services;
