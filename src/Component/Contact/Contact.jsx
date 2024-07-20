import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import img from "../../assets/icon-marker.png";
import img2 from "../../assets/icon-phone.png";
import img3 from "../../assets/icon-envelope.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-nav">
          <Link to={"/"}>
            {" "}
            Home <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
          <h5>Contact</h5>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-space"></div>
            <div className="contact-info">
              <div className="name">
                <img src={img} alt="" />{" "}
                <div className="name-caption">
                  <p>
                    Company Name INC. <br />
                    2803 Avenue Street, Los Angeles
                  </p>
                </div>
              </div>
              <div className="info-container d-flex w-75  justify-content-between">
                <div className="phone">
                  <img src={img2} alt="" />
                  <p>01276232709</p>
                </div>
                <div className="email">
                  <img src={img3} alt="" />
                  <p>amar237204@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consectetur <br /> inventore ducimus, facilis, numquam id soluta
              omnis eius recusandae nesciunt <br /> vero repellat harum cum.
              Nisi facilis odit hic, ipsum sed!
            </p>
    <br />
            <form action="">
              <input type="text" placeholder="Your name..." />
              <input type="text" placeholder="Email Addresss..." />
              <input type="text" placeholder="Company name..." />
              <input type="text" placeholder="Website..." />
              <textarea name="" id="" placeholder="Message. . ."></textarea>
              <button type="submit" className="btn  ms-auto ">Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
