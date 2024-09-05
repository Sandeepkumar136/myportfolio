import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-title">
            Codewith Sanju &copy; 2024
        </div>
      <ul className="footer-items">
        <li className="social-links"><a href="https://www.facebook.com/profile.php?id=61551699696823" title='Facebook' className="social-hyper-link"><i class='footer-icons bx bxl-facebook'></i></a></li>
        <li className="social-links"><a href="https://www.instagram.com/" title='Instagram' className="social-hyper-link"><i class='footer-icons bx bxl-instagram' ></i></a></li>
        <li className="social-links"><a href="https://t.me/CodewithSanju" title='Telegram' className="social-hyper-link"><i class='footer-icons bx bxl-telegram' ></i></a></li>
        <li className="social-links"><a href="https://github.com/Sandeepkumar136" title='Github' className="social-hyper-link"><i class='footer-icons bx bxl-github' ></i></a></li>
      </ul>
    </div>
  )
}

export default Footer
