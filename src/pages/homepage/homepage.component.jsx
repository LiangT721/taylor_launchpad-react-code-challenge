import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadMessageList } from "../../redux/homepage/homepage.asyncAction";

import "./homepage.component";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loading default list");
    dispatch(loadMessageList());
  }, []);

  return <div className="homepage">Home page</div>;
};

export default Homepage;
