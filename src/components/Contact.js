import React, { useState } from 'react'
import Loader from './Loader'
import TermsandConditons from './TermandFaq';
import Faq from './Faq';
const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index)
    }
  };
  return (
    <div>
      <Loader />
      <h2 className="main-title" data-aos="fade-up">Terms and Conditions</h2>
      <div className="t-container">
        {
          TermsandConditons.map((e) => (
            <div className="t-contain" key={e.id}>
              <h3 className="t-title" data-aos="fade-right">{e.title}</h3>
              <p className="t-desc">{e.description}</p>
              <ul className="t-items">
                <li className="t-list" style={{ display: e.alies ? 'block' : 'none' }}>{e.alies}</li>
                <li className="t-list" style={{ display: e.alies1 ? 'block' : 'none' }}>{e.alies1}</li>
              </ul>
            </div>
          ))
        }
      </div>
      <h2 className='main-title'>Frequently Asked Questions (FAQ)</h2>
      <div className="f-container">
        {
          Faq.map((e, index) => (
            <div key={e.id} className="f-contain">
              <div className="quest-contain">
                <div className="question">{e.question}</div>
                <div className="f-btn" onClick={() => toggleAnswer(index)}>
                  {openIndex === index ? (
                    <i className="bx bx-up-arrow-circle f-icon"></i>
                  ) :
                    (
                      <i className="bx bx-down-arrow-circle f-icon"></i>
                    )}
                </div>
              </div>
              {openIndex===index && <p className='faq-answer'>{e.answer}</p>}
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Contact
