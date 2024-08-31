import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-contain">
          <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="Logo" className="logo-img" />
          <p className="logo-title"><i class='bx bx-code-alt'></i> sandeep kumar</p>
        </div>
        <ul className="nav-items">
          <li className="nav-list"><a href="#" className="nav-link">education</a></li>
          <li className="nav-list"><a href="#" className="nav-link">gears</a></li>
          <li className="nav-list"><a href="#" className="nav-link">contributors</a></li>
          <li className="nav-list"><a href="#" className="nav-link">projects</a></li>
          <li className="nav-list"><a href="#" className="nav-link">services</a></li>
          <li className="nav-list"><a href="#" className="nav-link">contact us</a></li>
        </ul>
        <div className="config-function">
          <button className="theme-btn">
            <i className="bx bx-moon"></i>
          </button>
        <form action="#" id='searchbox' method="get">
          <input type="text" name="search bar" placeholder='CTRL + K' id="searchbar" />
        </form>
        </div>
        <div className="toggle-nav">
          <button className="toggle-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
