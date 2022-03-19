import React from "react";

import { useSelector } from "react-redux";

import "./postInfoDisplay.style.scss";

const PostInfoDisplay = () => {
  const information = useSelector((state) => state.postal.information);
  const searchStatus = useSelector((state) => state.postal.searchStatus);

  return (
    <div className="post-info-display w-75 m-auto d-flex justify-content-center">
      {searchStatus && <div className="search-status p-5">{searchStatus}</div>}
      {information && (
        <div className="post-info-area mt-5">
          <div className="post-country-area py-3 px-5">
            <p className="post-info-country mb-1">
              Country: {information.country} (
              {information["country abbreviation"]})
            </p>
            <p className="post-info-code ">
              Post Code: {information["post code"]}
            </p>
          </div>

          {information.places.map((el, index) => (
            <div className="py-3 px-5" key={index}>
              <p className="post-info-city">City: {el["place name"]}</p>
              <p className="post-info-state">
                State: {el.state}({el["state abbreviation"]})
              </p>
              <p className="post-info-loca">
                <span className="me-3">lon: {el.longitude}</span>{" "}
                <span>lat: {el.latitude}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostInfoDisplay;
