import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div>
        <section className="contact-sec sec-pad">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title">Contact us</h1>

          <ul className="contact-ul">
            <li><i className="fa-solid fa-location-dot"></i> Howrah,West Bengal , India</li>

            <li>
              <i className="fa fa-phone"></i>
              <a href="/"><b>0123456789</b></a>,
              <a href="/"><b>987543210</b></a>
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="/"><b> projectworld@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="/" className="fb"><i className="fa-brands fa-facebook"></i></a>
            <a href="/" className="insta"><i className="fa-brands fa-instagram"></i></a>
            <a href="/" className="twitter"><i className="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div className="col-md-6">
        <form action="/" className="contFrm" method="GET">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
            </div>

            <div className="col-12">
              <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div className="col-12">
              <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>

    <div style={{textAlign: "center", marginTop: "20px"}}>
      <p> Copyright &copy;
       
        All rights reserved | Ajeet
      </p>
    </div>

  </div>
</section>
    </div>
  )
}
