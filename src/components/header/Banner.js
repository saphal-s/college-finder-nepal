import React from "react";
import "./style.css";
import {
  FaMapMarkerAlt,
  FaLevelUpAlt,
  FaUniversity,
  FaBookReader,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banners">
        <div className="clip-top"></div>
        <div className="banner-head pt-3 mt-0 mt-lg-4 pt-md-5 pt-lg-5">
          <h2>Find the right college for you.</h2>
          <p className="pt-2">
            Not sure where to start? Choose a category to start exploring!
          </p>
        </div>
        <div className="banner-card pt-md-4 ">
          <div className="card_s">
            <div className="icons">
              <FaMapMarkerAlt className="icon" />
            </div>
            <p>Location</p>
          </div>
          <div className="card_s">
            <div className="icons">
              <FaLevelUpAlt className="icon" />
            </div>
            <p>Level</p>
          </div>
          <div className="card_s">
            <div className="icons">
              <FaUniversity className="icon" />
            </div>
            <p>University</p>
          </div>
          <div className="card_s">
            <div className="icons">
              <FaBookReader className="icon" />
            </div>
            <p>Courses</p>
          </div>
        </div>
        <div className="banner-clip"></div>
      </div>
    </div>
  );
};

export default Banner;
