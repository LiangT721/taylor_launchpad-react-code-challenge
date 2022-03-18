import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadMessageList } from "../../redux/homepage/homepage.asyncAction";

import MessageList from "../../components/messageList/messageList.component";
import MessageDetial from "../../components/messageDetial/messageDetial.component";

import "./homepage.component";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loading default list");
    dispatch(loadMessageList());
  }, []);

  return (
    <div className="homepage">
      <MessageList />
      <MessageDetial />
    </div>
  );
};

export default Homepage;
