import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { ImBookmarks } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import "./style.css";

const Home = () => {
  return (
    <div className="home pb-4 pt-4">
      <div className="focused pb-3">
        <div className="focused-card">
          <div className="icons">
            <BiSearchAlt className="icon" />
          </div>
          <h3 className="pt-3">1. Search Colleges</h3>
          <p>Search colleges based on city, label, university, courses.</p>
        </div>
        <div className="focused-card">
          <div className="icons">
            <FaHandsHelping className="icon" />
          </div>
          <h3 className="pt-3">2. Communicate with college</h3>
          <p>
            Communicate with college to finding course based on your choice.
          </p>
        </div>
        <div className="focused-card">
          <div className="icons">
            <ImBookmarks className="icon" />
          </div>
          <h3 className="pt-3">3. Start Apply </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            laboriosam..
          </p>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-4">
          <img src="./image/ad2.png" className="w-100  p-3" alt="" />
          <img src="./image/ad2.gif" className="w-100 p-3 " alt="" />
          <img src="./image/ad4.jpg" className="w-100 p-3 " alt="" />
        </div>
        <div className="col-md-8">
          <div className="colleges pt-5 pb-5 mb-4 ">
            <h2>See Highest Ranked Colleges</h2>
            <div className="college">
              <div className="college-card">
                <div className="image-section">
                  <div className="college-image">
                    <img src="./image/college-image.jpg" alt="" />
                  </div>
                  <div className="college-logo">
                    <img src="./image/nsc.jpg" alt="" />
                  </div>
                  <div className="like-icon">
                    <AiOutlineHeart className="icon" />
                  </div>
                </div>
                <div className="college-title ps-4 pb-4">
                  <h4 className="pt-4 mt-3">New Summit College</h4>
                  <span>Shantinagar, Kathmandu </span>
                </div>
                <div className="buttons">
                  <button>View Details</button>
                  <button className="apply">Click to Apply</button>
                </div>
              </div>
              <div className="college-card">
                <div className="image-section">
                  <div className="college-image">
                    <img src="./image/trinity.jpg" alt="" />
                  </div>
                  <div className="college-logo">
                    <img src="./image/tcollege.png" alt="" />
                  </div>
                  <div className="like-icon">
                    <AiOutlineHeart className="icon" />
                  </div>
                </div>
                <div className="college-title ps-4 pb-4">
                  <h4 className="pt-4 mt-3">Trinity Int'l College</h4>
                  <span>Shantinagar, Kathmandu </span>
                </div>
                <div className="buttons">
                  <button>View Details</button>
                  <button className="apply">Click to Apply</button>
                </div>
              </div>
              <div className="college-card">
                <div className="image-section">
                  <div className="college-image">
                    <img src="./image/deer1.jpg" alt="" />
                  </div>
                  <div className="college-logo">
                    <img src="./image/dlogo.jpg" alt="" />
                  </div>
                  <div className="like-icon">
                    <AiOutlineHeart className="icon" />
                  </div>
                </div>
                <div className="college-title ps-4 pb-4">
                  <h4 className="pt-4 mt-3">
                    Deerwalk Institute of Technonogy
                  </h4>
                  <span>Shantinagar, Kathmandu </span>
                </div>
                <div className="buttons">
                  <button>View Details</button>
                  <button className="apply">Click to Apply</button>
                </div>
              </div>
              <div className="college-card">
                <div className="image-section">
                  <div className="college-image">
                    <img src="./image/college-image.jpg" alt="" />
                  </div>
                  <div className="college-logo">
                    <img src="./image/nsc.jpg" alt="" />
                  </div>
                  <div className="like-icon">
                    <AiOutlineHeart className="icon" />
                  </div>
                </div>
                <div className="college-title ps-4 pb-4">
                  <h4 className="pt-4 mt-3">New Summit College</h4>
                  <span>Shantinagar, Kathmandu </span>
                </div>
                <div className="buttons">
                  <button>View Details</button>
                  <button className="apply">Click to Apply</button>
                </div>
              </div>
            </div>
            <div className="view-all-button pt-5">
              <button>View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
