import React from 'react';
import Loader from './Loader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PureServicesData from './ServicesAPI';

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



const Services = () => {
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
    <div>
      <Loader/>
      <h2 className='main-title'>Our Services</h2>
      <Slider {...settings}>
        {
          PureServicesData.map((e)=>(
            <div key={e.id} style={{ padding: '10px' }}>
              <div className="s-card">
                <div className="s-img-contain">
                  <img src={e.img} alt='Services Img' />
                </div>
                <div className="s-card-body">
                  <div className="s-text-contain">
                    <h5 className="s-title">
                      {e.title}
                    </h5>
                  <a href={e.link} className="c-card-info-btn"><i class='bx bx-info-circle'></i></a>
                  </div>
                  <p>{e.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Services
