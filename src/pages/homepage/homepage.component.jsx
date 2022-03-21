import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadMessageList } from "../../redux/homepage/homepage.asyncAction";
import { homepageAction } from "../../redux/homepage/homepage.slice";

import MessageList from "../../components/messageList/messageList.component";
import MessageDetial from "../../components/messageDetial/messageDetial.component";
import PostMessagePopup from "../../components/postMessagePopups/postMessagePopup.component";

import "./homepage.style.scss";

const Homepage = () => {
  const messagePushReturn = useSelector( state => state.homepage.messagePushReturn)
  const messageSeleted = useSelector((state) => state.homepage.messageSeleted);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homepageAction.setLoadingStatus('Loading'))
    dispatch(loadMessageList());
  }, []);

  return (
    <div className="homepage position-relative">
    {messageSeleted.id !== 0 &&   
    <MessageDetial />}
      <MessageList />
      <PostMessagePopup />
      <div className={`${messagePushReturn? "appear":""} message-return p-3`}>
        <p className="message-return-text text-center p-5">{messagePushReturn}</p>
        <button className="button position-absolute"
          onClick={()=>dispatch(homepageAction.setMessagePushReturn(null))}>Comfirm</button>
      </div>
      <button className="post-btn button"  onClick={()=>dispatch(homepageAction.setPostPopUp())}>POST NEW</button>

    </div>
  );
};

export default Homepage;
