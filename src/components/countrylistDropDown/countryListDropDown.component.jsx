import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { universitiesAction } from "../../redux/universities/universities.slice";

import "./countryListDropDown.style.scss";

const CountryListDropDown = () => {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.universities.countryList);
  const countrySeleted = useSelector( (state)=> state.universities.countrySeleted);

  return (
    <div className="countryListDropDown-div">
      <label htmlFor="country-list">Selet a country</label>
      <br />
      <select
        name="country-list"
        id=""
        className="country-list-drop-down"
        onChange={e => dispatch(universitiesAction.setCountrySelected(e.target.value))}
     value={countrySeleted}
      >
        {countryList.map((el, index) =>( 
            <option className="" key={index} value={el}>
              {el}
            </option>)
          
        )}
      </select>
      <div>{countrySeleted}</div>
    </div>
  );
};

export default CountryListDropDown;
