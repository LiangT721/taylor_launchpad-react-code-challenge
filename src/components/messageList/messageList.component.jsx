import React from "react";

import { useSelector } from "react-redux";

import MessageCard from "../messageCard/messageCard.component";
import MessageSearchBar from "../messageSearchBar/messageSearchBar.component";

import "./messageList.style.scss";

const MessageList = () => {
    const messageList = useSelector( state => state.homepage.messageList)
    const loadingStatus = useSelector (state => state.homepage.loadingStatus )

  
  const messageListDiv = () => {
    if (loadingStatus){
          return <div className="loading-status p-3">{loadingStatus}</div>
        }else
        {
          return messageList.map( el => (
                <MessageCard key={el.id} data={el} />
            ))
        }
  }

  return (
    <div className="message-list">
      <MessageSearchBar />
      <div className="message-list-display">
        {messageListDiv()}
      </div>
    </div>
  );
};
export default MessageList;
