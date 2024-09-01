import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isSidebaropen, setisSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebaropen);
  }
  const [darkMode, Setdarkmode] = useState(() => {
    const savedTheme = localStorage.getItem('darkmode');
    return savedTheme === 'true' ? true : false;
  })

  const screenModeClicker = () => {
    Setdarkmode(perMode => {
      const newMode = !perMode;
      localStorage.setItem('darkmode', newMode);
      return newMode;
    });
  };

  useEffect(()=>{
    if(darkMode){
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }else{
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}, [darkMode]);
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
          <button className="theme-btn" onClick={screenModeClicker}>
            {darkMode?(<i className="bx bx-moon"></i>):(<i className="bx bx-sun"></i>)}
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
      <aside className={`sidebar ${isSidebaropen ? 'open' : ''}`}>
        <div className="side-logo-contain-and-toggle">
          <div className="s-logo-contain">
            <img
              src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg"
              alt="Logo"
              className="logo-img"
            />
            <p className="logo-title"  onClick={toggleSidebar}>
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
              <a href="#" className="side-link"  onClick={toggleSidebar}>
                education
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link"  onClick={toggleSidebar}>
                gears
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link"  onClick={toggleSidebar}>
                contributors
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link"  onClick={toggleSidebar}>
                projects
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link"  onClick={toggleSidebar}>
                services
              </a>
            </li>
            <li className="side-list">
              <a href="#" className="side-link"  onClick={toggleSidebar}>
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
                id="searchbar2" onSubmit={toggleSidebar}
              />
            </form>
            <button className="theme-btn" onClick={()=>{
              toggleSidebar();
              screenModeClicker();
            }}>
              {darkMode?(<i className="bx bx-moon"></i>):(<i className="bx bx-sun"></i>)}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
