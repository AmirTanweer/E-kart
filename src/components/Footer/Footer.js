import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
    

  {/* <!-- footer area --> */}
  <footer className="footer-container">
    <div className="newsletter">
      <span>Newsletter</span><div className="email"><input type="email" placeholder="Your email"/><i className="fa fa-paper-plane"></i></div>
    </div>
    <div className="social-links">
      <div className="link"><a href="/"><i className="fab fa-facebook"></i></a></div>
      <div className="link"><a href="/"><i className="fab fa-instagram"></i></a></div>
      <div className="link"><a href="/"><i className="fab fa-twitter"></i></a></div>
    </div>
    <div className="copyright">
      <p>&copy; Copyright, 2023 - NB</p>
    </div>
  </footer>
</div>
    
  )
}
