import React, { useState } from "react";

const Navbar = () => {
  const [isSidebaropen,setisSidebarOpen]=useState(false);
  const toggleSidebar=()=>{
    setisSidebarOpen(!isSidebaropen);
  }
  return (
    <div>
      <div className="navbar">
        <div className="logo-contain">
          <img
            src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg"
            alt="Logo"
            className="logo-img"
          />
          <p className="logo-title">
            <i class="bx bx-code-alt"></i> sandeep kumar
          </p>
        </div>
        <ul className="nav-items">
          <li className="nav-list">
            <a href="#" className="nav-link">
              education
            </a>
          </li>
          <li className="nav-list">
            <a href="#" className="nav-link">
              gears
            </a>
          </li>
          <li className="nav-list">
            <a href="#" className="nav-link">
              contributors
            </a>
          </li>
          <li className="nav-list">
            <a href="#" className="nav-link">
              projects
            </a>
          </li>
          <li className="nav-list">
            <a href="#" className="nav-link">
              services
            </a>
          </li>
          <li className="nav-list">
            <a href="#" className="nav-link">
              contact us
            </a>
          </li>
        </ul>
        <div className="config-function">
          <form action="#" id="searchbox" method="get">
            <input
              type="text"
              name="search bar"
              placeholder="CTRL + K"
              id="searchbar"
            />
          </form>
          <button className="theme-btn">
            <i className="bx bx-moon"></i>
          </button>
        </div>
        <div className="toggle-nav">
          {!isSidebaropen && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </div>
      <aside className={`sidebar ${isSidebaropen ? 'open': ''}`}>
        <div className="side-logo-contain-and-toggle">
          <div className="s-logo-contain">
            <img
              src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg"
              alt="Logo"
              className="logo-img"
            />
            <p className="logo-title">
              <i class="bx bx-code-alt"></i> sandeep kumar
            </p>
          </div>
          <div className="close-toggle-icon" onClick={toggleSidebar}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="s-side-items">
          <ul className="side-items">
            <li className="side-list">
              <a href="#" className="side-link">
                education
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link">
                gears
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link">
                contributors
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link">
                projects
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link">
                services
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link">
                contact us
              </a>
            </li>
          </ul>
          <div className="side-config-function">
          <form action="#" id="searchbox" method="get">
            <input
              type="text"
              name="search bar"
              placeholder="CTRL + K"
              id="searchbar2"
            />
          </form>
          <button className="theme-btn">
            <i className="bx bx-moon"></i>
          </button>
        </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
