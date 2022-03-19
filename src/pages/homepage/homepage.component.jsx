import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadMessageList } from "../../redux/homepage/homepage.asyncAction";
import { homepageAction } from "../../redux/homepage/homepage.slice";

import MessageList from "../../components/messageList/messageList.component";
import MessageDetial from "../../components/messageDetial/messageDetial.component";
import PostMessagePopup from "../../components/postMessagePopups/postMessagePopup.component";

import "./homepage.style.scss";

const Homepage = () => {
  const postPopUp = useSelector( state => state.homepage.postPopUp)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loading default list");
    dispatch(loadMessageList());
  }, []);

  return (
    <div className="homepage">
      <MessageList />
      <MessageDetial />
      { postPopUp && (<PostMessagePopup />)}
      <button className="post-btn button" role='button' onClick={()=>dispatch(homepageAction.setPostPopUp())}>POST NEW</button>

    </div>
  );
};

export default Homepage;
