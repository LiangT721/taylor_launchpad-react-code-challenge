import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadingUniversityList } from "../../redux/universities/universities.asyncAction";

import "./universitiesDisplay.style.scss";

const UniversitiesDisplay = () => {
  const dispatch = useDispatch();
  const universityList = useSelector(
    (state) => state.universities.universityList
  );
  const loadingStatus = useSelector(state => state.universities.loadingStatus
    )
  useEffect(() => {
    dispatch(loadingUniversityList());
  }, []);

  const uniList = () => {
    if ( loadingStatus ) {
      return <div className="no-data-display m-4 fs-3">{loadingStatus}</div>;
    } else {
      return universityList.map((el, index) => (
        <div className="university-card card position-relative" key={index}>
          <div className="card-background position-absolute">{el.name.slice(0,1)}</div>
          <div className="card-backgroud-bottom w-100 h-50 position-absolute bottom-0"></div>
          <div className="card-body pt-3 position-relative h-100">
            <h6 className="card-title mb-0">{el.name}</h6>
            <p className="card-counrty">
              {el.country} ({el.alpha_two_code})
            </p>
            <div className="web h-50 position-absolute bottom-0 pt-1">
              {el.web_pages.map((page, index) => (
                <a href={page} className="card-text mb-0" key={index}>
                  {page}
                </a>
              ))}
            </div>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="universities-display">
      <div className="university-list d-inline-flex flex-wrap justify-content-between mx-3 mt-3 p-3">
        {uniList()}
      </div>
    </div>
  );
};

export default UniversitiesDisplay;
