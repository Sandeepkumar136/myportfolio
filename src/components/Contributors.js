import React, { useState } from 'react';
import Loader from './Loader';



const Contributor = [{
  id: '1',
  name: 'Rakesh Sharma',
  title: 'Frontend Developer',
  img: 'https://i.ibb.co/wKs6TVF/partner-1.jpg',
  description: 'Frontend developers design and implement user interfaces, ensuring websites are responsive, visually appealing, and provide excellent user experiences.'
},
{
  id: '2',
  name: 'Sumit Goshwami',
  title: 'Backend Developer',
  img: 'https://i.ibb.co/j8Yy3H2/partner-2.jpg',
  description: 'Backend developers build and maintain server-side logic, databases, and APIs, ensuring smooth data flow and efficient functionality behind the scenes.'
},
{
  id: '4',
  name: 'kiran gupta',
  title: 'Backend Developer',
  img: 'https://i.ibb.co/b7qwMBM/review-5.webp',
  description: 'Backend developers manage server-side programming, databases, and API integrations, ensuring seamless communication between the client and server systems.'
},
{
  id: '3',
  name: 'Ranjan mishra',
  title: 'Data Analytis',
  img: 'https://i.ibb.co/8Y5BXZw/partner-3.jpg',
  description: 'Data analysts interpret data, identify trends, and provide insights to help organizations make informed decisions and improve performance.'
}]


const Clients = [{
  id: '1',
  name: 'Rajiv Punia',
  img: 'https://i.ibb.co/3kqzS4B/40a8a2166772919-5fb560e7a6387.jpg',
  stars: '4.5',
  description: 'Sandeep Kumar delivered exceptional custom frontend solutions with React, crafting responsive layouts, animations, and seamless user experiences. Highly recommended!'
},
{
  id: '2',
  name: 'Mahesh Chandra',
  img: 'https://i.ibb.co/XDFzwdh/Shamendra-Egodawela.jpg',
  stars: '4',
  description: 'Codewith Sanju provided outstanding custom frontend development using React, creating smooth animations, responsive designs, and excellent user interactions. Highly recommended!'
},
{
  id: '3',
  name: 'Samanta Kashyap',
  img: 'https://i.ibb.co/KNMJcyx/OIP-2.jpg',
  stars: '4',
  description: 'Codewith Sanju delivered solid frontend work using React. Custom features, responsive layouts, and good attention to detail. Satisfied with the results.'
},
{
  id: '4',
  name: 'Virat Gupta',
  img: 'https://i.ibb.co/68k3RcD/Lokendraa.jpg',
  stars: '5',
  description: 'Sandeep Kumar completed the frontend project efficiently using React. Custom components and responsive design were well-executed. Met expectations.'
},
{
  id: '5',
  name: 'Brittany Kaufman',
  img: 'https://i.ibb.co/PZJB99L/OIP-1.jpg',
  stars: '3',
  description: 'Sandeep Kumar delivered reliable React solutions with responsive design and custom features.'
},
{
  id: '6',
  name: 'Courtney Sniadecki',
  img: 'https://i.ibb.co/XbX6PrS/OIP.jpg',
  stars: '3.5',
  description: 'Solid React work, responsive design.'
},
{
  id: '7',
  name: 'Tyler-Sanslow',
  img: 'https://i.ibb.co/mFkcXZJ/Tyler-Sanslow.webp',
  stars: '5',
  description: 'Efficient React development, custom solutions.',
},
{
  id: '8',
  name: 'Justin-Sires',
  img: 'https://i.ibb.co/pJ44H8y/Justin-Sires-profile.jpg',
  stars: '4',
  description: 'Reliable frontend work, responsive layouts.'
}
]


const ShuffledArry = (e) => {
  for (let i = e.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [e[i], e[j]] = [e[j], e[i]];
  }
  return e;
}
const ShuffledClientsById = (clients) => {
  const shuffledClients = ShuffledArry(clients);
  shuffledClients.forEach((client, index) => {
    client.id = (index + 1).toString()
  });
  return shuffledClients
}
const shuffledClients = ShuffledClientsById(Clients);
const FinalClientArr = shuffledClients.sort((a, b) => { return a - b })
console.log(FinalClientArr);


const ContData = Contributor.sort((a, b) => { return a.id - b.id });





const StarRating = ({ rating }) => {
  const totalStars = 5;

  const getStarClass = (index) => {
    if (rating >= index + 1) {
      return 'star full';
    } else if (rating >= index + 0.5) {
      return 'star half';
    } else {
      return 'star empty';
    }
  }



  return (
<div className="star-rating">
      {
        Array.from({ length: totalStars }, (_, index) => (
          <span key={index} className={getStarClass(index)}>&#9733;</span>
        ))
      }
    </div>
  )
};







const Contributors = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ContData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ContData.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, title, img, description } = ContData[currentIndex];

  // Clients Functions
  const [currentIndexClients, setCurrentIndexClients] = useState(0);

  const handlePrevClients = () => {
    setCurrentIndexClients((prevIndex) => (prevIndex === 0 ? FinalClientArr.length - 1 : prevIndex - 1));
  };

  const handleNextClients = () => {
    setCurrentIndexClients((prevIndex) => (prevIndex === FinalClientArr.length - 1 ? 0 : prevIndex + 1));
  };

  const { name: clientsName, img: clientsImg, stars: clientsStars, description: clientsDescription } = FinalClientArr[currentIndexClients];

  return (
    <>
      <Loader />
      <h2 className="edu-heading">
        Contributors
      </h2>
      <div className="contributors-container">
        <div className="c-card">
          <button className="c-button prev" onClick={handlePrev}>
            <i class='bx bx-left-arrow-alt c-slider-icon'></i>
          </button>
          <div className="c-card-content">
            <img src={img} alt={name} className="c-card-img" />
            <div className="c-card-details">
              <h2 className="c-card-title">{name}</h2>
              <p className="c-card-subtitle">{title}</p>
              <p className="c-card-description">{description}</p>
            </div>
          </div>
          <button className="c-button next" onClick={handleNext}>
            <i class='bx bx-right-arrow-alt c-slider-icon'></i>
          </button>
        </div>
      </div>
      <h2 className="edu-heading">
        Happy Clients
      </h2>
      <div className="contributors-container">
        <div className="c-card">
          <button className="c-button prev" onClick={handlePrevClients}>
            <i class='bx bx-left-arrow-alt c-slider-icon'></i>
          </button>
          <div className="c-card-content">
            <img src={clientsImg} alt={clientsName} className="c-card-img" />
            <div className="c-card-details">
              <h2 className="c-card-title">{clientsName}</h2>
              <StarRating rating={parseFloat(clientsStars)}/>
              <p className="c-card-description">{clientsDescription}</p>
            </div>
          </div>
          <button className="c-button next" onClick={handleNextClients}>
            <i class='bx bx-right-arrow-alt c-slider-icon'></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contributors;