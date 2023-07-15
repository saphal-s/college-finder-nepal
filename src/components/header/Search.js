import React from "react";
import "./style.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Select from "react-select";

const optionsone = [
  { label: "Select label" },
  { value: "plus2", label: "+2" },
  { value: "bachelor", label: "Bachelor" },
  { value: "Master", label: "Master" },
];

const optionstwo = [
  { label: "Select University" },
  { value: "tribhuban", label: "Tribhuban University" },
  { value: "kathmandu", label: "Kathmandu University" },
  { value: "pokhara", label: "Pokhara University" },
  { value: "purbanchal", label: "Purbanchal University" },
  { value: "Far-western University", label: "Far-western University" },
  { value: "Mid-western University", label: "Mid-western University" },
  { value: "Nepal Open University", label: "Nepal Open University" },
];

const optionsthree = [
  { label: "Select Courses" },
  { value: "bba", label: "BBA" },
  { value: "bca", label: "BCA" },
  { value: "csit", label: "CSIT" },
  { value: "bbs", label: "BBS" },
  { value: "science", label: "Science" },
  { value: "commerce", label: "Commerce" },
];
const city = [
  { label: "Select City" },
  { value: "kathmandu", label: "Kathmandu" },
  { value: "pokhara", label: "Pokhara" },
  { value: "bhaktapur", label: "Bhaktapur" },
  { value: "lalitpur", label: "Lalitpur" },
  { value: "butwal", label: "Biratnagar" },
  { value: "biratnagar", label: "Biratnagar" },
];

const Search = () => {
  return (
    <div className="search-section">
      <div className="form">
        <form>
          <div className="form_label city">
            <Select
              defaultValue={city[0]}
              options={city}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#009cab",
                  primary: "rgb(0 133 138)",
                },
              })}
            />
            <div className="location_icon">
              <FaMapMarkerAlt className="licon" />
            </div>
          </div>
          <div className="form_label">
            <Select
              defaultValue={optionsone[0]}
              options={optionsone}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#009cab",
                  primary: "rgb(0 133 138)",
                },
              })}
            />
          </div>
          <div className="form_label">
            <Select
              defaultValue={optionstwo[0]}
              options={optionstwo}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#009cab",
                  primary: "rgb(0 133 138)",
                },
              })}
            />
          </div>
          <div className="form_label">
            <Select
              defaultValue={optionsthree[0]}
              options={optionsthree}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#009cab",
                  primary: "rgb(0 133 138)",
                },
              })}
            />
          </div>
          <div className="search-button">
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
