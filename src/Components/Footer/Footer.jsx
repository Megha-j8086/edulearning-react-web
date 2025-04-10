import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import {Link} from 'react-router-dom'
function Footer() {
  const handleClick =()=>{
    window.scrollTo(0,0);
  }
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="footer-wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt=''></img>
              </div>
              <h2>Edu-Learning AI</h2>
            </div>
            <p>Embrace the future of innovation and technology with our cutting-edge business solutions.</p>
          </div>

          <div className="footer-box">
            <h4 className='footer-title'>Company</h4>
            <ul className='footer-links'>
              <li>
                <Link to='/courses' onClick={handleClick}>Our Programs </Link>
              </li>

              <li>
                <Link to='/services' onClick={handleClick}>Our Plan </Link>
              </li>

              <li>
                <a href=''>Become a Member</a>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h4 className='footer-title'>Quick Links</h4>
            <ul className='footer-links'>
              <li>
                <Link to='/about' onClick={handleClick}>About Us</Link>
              </li>

              <li>
                <Link to='/contact' onClick={handleClick}>Contact Us</Link>
              </li>

              <li>
                <Link to='/support' onClick={handleClick}>Support Us</Link>
              </li>
            </ul>
          </div>



        </div>
      </div>




    </footer>
  )
}

export default Footer