import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { universitiesAction } from "../../redux/universities/universities.slice";
import { loadingUniversityList } from '../../redux/universities/universities.asyncAction'

import "./countryListDropDown.style.scss";

const CountryListDropDown = () => {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.universities.countryList);
  const countrySeleted = useSelector( (state)=> state.universities.countrySeleted);

  return (
    <div className="countryListDropDown-div pt-3 pb-5 px-5 position-sticky top-0">
      <label className="CountryList-label mb-2" htmlFor="country-list">Please Selet a country</label>
      <br />
      <select
        name="country-list"
        id=""
        className="country-list-drop-down"
        onChange={e => {
          dispatch(universitiesAction.setCountrySelected(e.target.value))
          dispatch(universitiesAction.setLoadingStatus('Loading...'))
          dispatch(loadingUniversityList())
        }}
     value={countrySeleted}
      >
        {countryList.map((el, index) =>( 
            <option className="" key={index} value={el}>
              {el}
            </option>)
          
        )}
      </select>
    </div>
  );
};

export default CountryListDropDown;
