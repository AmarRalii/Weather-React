import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form action="">
              <input
                type="text"
                className="border-0"
                placeholder="Enter your email to subscribe..."
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="col-md-3">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <p>Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
      </div>
    </div>
  );
}
