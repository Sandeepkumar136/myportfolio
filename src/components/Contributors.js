import React, {useState} from 'react';
import Loader from './Loader';



const Contributor=[{
  id:'1',
  name:'Rakesh Sharma',
  title:'Frontend Developer',
  img:'https://i.ibb.co/wKs6TVF/partner-1.jpg',
  description:'Frontend developers design and implement user interfaces, ensuring websites are responsive, visually appealing, and provide excellent user experiences.'
},
{
  id:'2',
  name:'Sumit Goshwami',
  title:'Backend Developer',
  img:'https://i.ibb.co/j8Yy3H2/partner-2.jpg',
  description:'Backend developers build and maintain server-side logic, databases, and APIs, ensuring smooth data flow and efficient functionality behind the scenes.'
},
{
  id:'4',
  name:'kiran gupta',
  img:'https://i.ibb.co/b7qwMBM/review-5.webp',
  description:'Backend developers manage server-side programming, databases, and API integrations, ensuring seamless communication between the client and server systems.'
},
{
  id:'3',
  name:'Ranjan mishra',
  title:'Data Analytis',
  img:'https://i.ibb.co/8Y5BXZw/partner-3.jpg',
  description:'Data analysts interpret data, identify trends, and provide insights to help organizations make informed decisions and improve performance.'
}]
const ContData=Contributor.sort((a,b)=>{return a.id-b.id});

const Contributors = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ContData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ContData.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, title, img, description } = ContData[currentIndex];

  return (
    <>
    <Loader/>
    <div className="contributors-container">
      <div className="c-card">
        <button className="c-button prev" onClick={handlePrev}>
        <i class='bx bx-left-arrow-alt'></i>
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
        <i class='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </div>
    </>
  );
};

export default Contributors;