import React from 'react'
import Loader from './Loader';
import HomeTyping from './HomeTyping';

const Home = () => {
  return (
    <div>
      <Loader/>
      <HomeTyping/>
      <div className="h-card-container">
        <div className="card-contain">
          <div className="c-img-sec">
            <img src="...../assets/DSC_3066-01.jpeg" alt="trip1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;