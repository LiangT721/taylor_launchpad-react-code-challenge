import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadingCountryList } from "../../redux/universities/universities.asyncAction";

import CountryListDropDown from "../../components/countrylistDropDown/countryListDropDown.component";
import UniversitiesDisplay from "../../components/universitiesDisplay/universitiesDisplay.component";

import "./universitiesPage.style.scss";

const UniversitiesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingCountryList());
  }, []);

  return (
    <div className="universities-page position-relative">
      <CountryListDropDown />
      <UniversitiesDisplay />
    </div>
  );
};
export default UniversitiesPage;
