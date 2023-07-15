import React from "react";
import logo from "../../img/college.png";
import "./style.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer pt-5 pb-1">
      <div className="col-md-10 offset-md-1 ps-5 ps-lg-0">
        <div className="row">
          <div className="col-md-2 pt-md-2">
            <div className="cfinder">
              <h5>College Finder Nepal</h5>
            </div>
            <div className="footer-social-icons mt-3">
              <div className="icons">
                <FaFacebookF />
              </div>
              <div className="icons">
                <FaLinkedinIn />
              </div>
              <div className="icons">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="col-md-4  subs ps-lg-4">
            <div className="subscribe pt-4 pt-lg-0">
              <p className="title">Stay Connected</p>
              <p className="text">
                We'll send you all information aobut colleges
              </p>
              <div className="subscribe-form">
                <form>
                  <input type="text" placeholder="Email address*" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2  pt-4 pt-lg-0">
            <ul className="popular">
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Scholarships</li>
              <li>Notices</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-2  pt-4 pt-lg-0">
            <h5>Popular Courses</h5>
            <ul className="popular">
              <li>Msc.IT</li>
              <li>MBA</li>
              <li>Bsc.CSIT</li>
              <li>BCA</li>
              <li>BBA</li>
              <li>more...</li>
            </ul>
          </div>
          <div className="col-md-2  pt-4 pt-lg-0">
            <h5>Top Colleges</h5>
            <p>By city</p>
            <ul className="colleges">
              <li>Kathamndu</li>
              <li>Pokhara</li>
              <li>Biratnagar</li>
              <li>Janakpur</li>
              <li>more...</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p>
          <center>&copy;2023 College Finder Nepal. All Rights Reserved.</center>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
