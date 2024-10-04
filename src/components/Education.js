import React, { useState } from 'react';
import Loader from './Loader';

const Es_Date = [{
  id: "1",
  title: "ICOM",
  date: "15-05-2020",
  description: "The Intermediate of Commerce degree provides foundational knowledge in business principles, accounting, economics, and finance. It equips students with essential skills for understanding financial statements, economic theories, and business operations. This program serves as a stepping stone to advanced studies or career opportunities in various commercial sectors."

},
{
  id: "2",
  title: "BCOM",
  date: "15-08-2024",
  description: "The Bachelor of Commerce degree offers an in-depth understanding of business management, accounting, finance, and economics. It prepares students for diverse careers by enhancing skills in financial analysis, strategic planning, and organizational management. This comprehensive program lays the groundwork for advanced study or professional roles in the commercial sector."
},
{
  id: "3",
  title: "DCA",
  date: "05-10-2019",
  description: "The Diploma in Computer Applications (DCA) provides foundational knowledge in computer science, focusing on software applications, programming, and IT tools. Students gain practical skills in areas such as word processing, spreadsheets, databases, and basic programming, preparing them for entry-level roles in the IT industry or further studies."
},
{
  id: "4",
  title: "Frontend Development",
  date: "20-08-2023",
  description: "Frontend Development involves creating the visual and interactive aspects of websites and applications. It focuses on building user interfaces using HTML, CSS, and JavaScript. Frontend developers ensure responsive, user-friendly designs that work across devices. This field combines creativity and coding skills to enhance user experiences and website functionality."
},
{
  id: "5",
  title: "Backend Development",
  date: "17-08-2024",
  description: "Backend Development focuses on the server side of web applications, handling data storage, server logic, and database management. With partial knowledge, a developer can manage basic server operations, database interactions, and API integration. This foundational understanding supports building and maintaining the core functionality of web applications, complementing frontend development."
},
{
  id: "6",
  title: "Tally Prime",
  date: "10-05-2022",
  description: "Tally Prime is a comprehensive business management software widely used for accounting, inventory management, payroll, and taxation. It simplifies financial processes with features like GST compliance, invoicing, and reporting. Designed for ease of use, Tally Prime helps businesses streamline their operations, maintain accurate records, and make informed financial decisions."
},
{
  id: "7",
  title: "Shoppers 9",
  date: "19-05-2023",
  description: "Shoppers 9 is a retail management software designed to streamline store operations, including inventory management, billing, and sales tracking. It offers features like barcode scanning, customer management, and detailed reporting. Shoppers 9 helps businesses efficiently manage day-to-day retail activities, ensuring smooth transactions and better inventory control for improved profitability."
},
{
  id: "8",
  title: "Data Anal in Pandas",
  date: "01-09-2024",
  description: "Data Analysis in Pandas involves using the Python library to manipulate, analyze, and visualize data. Pandas provides powerful tools for handling structured data, enabling tasks like data cleaning, filtering, aggregation, and statistical analysis. With Pandas, analysts can efficiently explore and draw insights from large datasets, supporting data-driven decision-making."
}
]




const Education = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isOpen, setIsOpen]=useState(false);
  const [isAnimation, setIsAnimation]=useState(false);

  const openBox=()=>{
    setIsAnimation(true)
    setIsOpen(true);
  }
  const closeBox=()=>{
    setIsAnimation(false);
    setTimeout(() => {
      setIsOpen(false)
    }, 300);
  }
  const handleOverlayclick=(e)=>{
    if(e.target.className.includes('dialog-overlay')){
      closeBox()
    }
  }

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  }

  const getShortDescription = (description) => {
    return description.split(" ").slice(0, 20).join(" ") + "....";
  }
  return (
    <div>
      <Loader />
      <h2 className="edu-heading">
        Education
      </h2>
      <div className="e-card-contain">
        {Es_Date.map((item) => (
          <div key={item.id} className="e-card">
            <div className="e-header">
              <div className="e-card-title">
                {item.title}
              </div>
              <div className="e-card-date">
                {item.date}
              </div>
            </div>
            <div className="e-card-description">
              <p className="e-card-text">
                {expandedId === item.id ? item.description : getShortDescription(item.description)}
              </p>
            </div>
            <button className='toggle-btn-e-card' onClick={() => toggleDescription(item.id)}>
              {expandedId === item.id ? <i className='toggle-icon-e bx bx-chevron-up'></i> : <i className='toggle-icon-e bx bx-chevron-down' ></i>}
            </button>
          </div>
        ))}
      </div>
      <h2 className="edu-heading">
        Languages and Tools
      </h2>
      <div className="lang-container">
        <ul className="lang-item">
          <li className="lang-list"><i className='lang-icon bx bxl-html5' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-css3' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-javascript' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-sass' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-react' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-nodejs' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-python'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-vuejs' ></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-visual-studio'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-mongodb'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxs-terminal'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-angular'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-bootstrap'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-github'></i></li>
          <li className="lang-list"><i className='lang-icon bx bxl-redux'></i></li>
        </ul>
      </div>
      <h2 className="edu-heading">
        Resume
      </h2>
      <div className="res-container">
        <div className="resu-contain">
          <p className="text-resu">
          Explore my skills, experience, and projects by downloading my resume. It's a quick and easy way to learn more about my professional background.
          </p>
          <button onClick={openBox} className="res-open-btn">Open or Download</button>
        </div>
      </div>
      {
        isOpen && (
          <div onClick={handleOverlayclick} className={`dialog-overlay ${isAnimation ? 'fade-in':'fade-out'}`}>
            <div className={`dialog-box ${isAnimation ? 'dialog-animation-in':'dialog-animation-out'}`}>
              <h1 className="heading-qr">Scan to See Resume.</h1>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/pdf.ac/43tohV" alt="" className="qr-code" />
              <span className="middle-span">or</span>
              <a href="https://i.ibb.co/TwyMkKm/resume-Sandeep.jpg" target='_blank' className="resume-link">download</a>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Education;
