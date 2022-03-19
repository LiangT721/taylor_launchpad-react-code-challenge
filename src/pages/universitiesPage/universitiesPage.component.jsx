import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadingCountryList } from "../../redux/universities/universities.asyncAction";

import './universitiesPage.style.scss';

const UniversitiesPage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadingCountryList())
    },[])

    return(
        <div className="universities-page">
        Universities page
        </div>
    )
}
export default UniversitiesPage;