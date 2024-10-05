import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  // Search functionality with CTRL + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault(); // Prevent the default system behavior
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  };

  const performSearch = () => {
    if (searchTerm) {
      window.find(searchTerm);
    }
  };

  // Sidebar Toggle functionality
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    if (!inputRef.current || document.activeElement !== inputRef.current) {
      setisSidebarOpen(!isSidebarOpen);
    }
  };

  // Dark mode toggle
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkmode');
    return savedTheme === 'true' ? true : false;
  });

  const screenModeClicker = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkmode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="logo-contain">
          <img
            src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg"
            alt="Logo"
            className="logo-img"
          />
          <p className="logo-title">
            <i className="bx bx-code-alt"></i> codewith sanju
          </p>
        </Link>
        <ul className="nav-items">
          <li className={`nav-list ${location.pathname === '/education' ? 'activenavbar' : ''}`}>
            <Link to="/education" className="nav-link">
              education
            </Link>
          </li>
          <li className={`nav-list ${location.pathname === '/gear' ? 'activenavbar' : ''}`}>
            <Link to="/gear" className="nav-link">
              gears
            </Link>
          </li>
          <li className={`nav-list ${location.pathname === '/contributor' ? 'activenavbar' : ''}`}>
            <Link to="/contributor" className="nav-link">
              contributors
            </Link>
          </li>
          <li className={`nav-list ${location.pathname === '/project' ? 'activenavbar' : ''}`}>
            <Link to="/project" className="nav-link">
              projects
            </Link>
          </li>
          <li className={`nav-list ${location.pathname === '/services' ? 'activenavbar' : ''}`}>
            <Link to="/services" className="nav-link">
              services
            </Link>
          </li>
          <li className={`nav-list ${location.pathname === '/contact' ? 'activenavbar' : ''}`}>
            <Link to="/contact" className="nav-link">
              About us
            </Link>
          </li>
        </ul>
        <div className="config-function">
          <form action="#" id="searchbox" onSubmit={handleSearch} method="get">
            <input
              type="text"
              name="searchBar"
              placeholder="CTRL + K"
              id="searchbar"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
          </form>
          <button className="theme-btn" onClick={screenModeClicker}>
            {darkMode ? (<i className="bx bx-moon"></i>) : (<i className="bx bx-sun"></i>)}
          </button>
        </div>
        <div className="toggle-nav">
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </div>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="side-logo-contain-and-toggle">
          <Link to="/" className="s-logo-contain">
            <img
              src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg"
              alt="Logo"
              className="logo-img"
            />
            <p className="logo-title" onClick={toggleSidebar}>
              <i className="bx bx-code-alt"></i> sandeep kumar
            </p>
          </Link>
          <div className="close-toggle-icon" onClick={toggleSidebar}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="s-side-items">
          <ul className="side-items">
            <li className={`side-list ${location.pathname === '/education' ? 'activenavbar' : ''}`}>
              <Link to="/education" className="side-link" onClick={toggleSidebar}>
                education
              </Link>
            </li>
            <li className={`side-list ${location.pathname === '/gear' ? 'activenavbar' : ''}`}>
              <Link to="/gear" className="side-link" onClick={toggleSidebar}>
                gears
              </Link>
            </li>
            <li className={`side-list ${location.pathname === '/contributor' ? 'activenavbar' : ''}`}>
              <Link to="/contributor" className="side-link" onClick={toggleSidebar}>
                contributors
              </Link>
            </li>
            <li className={`side-list ${location.pathname === '/project' ? 'activenavbar' : ''}`}>
              <Link to="/project" className="side-link" onClick={toggleSidebar}>
                projects
              </Link>
            </li>
            <li className={`side-list ${location.pathname === '/services' ? 'activenavbar' : ''}`}>
              <Link to="/services" className="side-link" onClick={toggleSidebar}>
                services
              </Link>
            </li>
            <li className={`side-list ${location.pathname === '/contact' ? 'activenavbar' : ''}`}>
              <Link to="/contact" className="side-link" onClick={toggleSidebar}>
                about us
              </Link>
            </li>
          </ul>
          <div className="side-config-function">
            <form action="#" id="searchbox" method="get" onSubmit={handleSearch}>
              <input
                type="text"
                name="searchBar"
                placeholder="CTRL + K"
                id="searchbar2"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
              />
            </form>
            <button className="theme-btn" onClick={() => {
              toggleSidebar();
              screenModeClicker();
            }}>
              {darkMode ? (<i className="bx bx-moon"></i>) : (<i className="bx bx-sun"></i>)}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
