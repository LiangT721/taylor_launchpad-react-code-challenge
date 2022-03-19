import React from "react";

import { useSelector } from "react-redux";

import MessageCard from "../messageCard/messageCard.component";
import MessageSearchBar from "../messageSearchBar/messageSearchBar.component";

import "./messageList.style.scss";

const MessageList = () => {
    const messageList = useSelector( state => state.homepage.messageList)


  return (
    <div className="message-list col-5">
      <MessageSearchBar />
      <div className="message-list-display">
        {
            messageList && messageList.map( el => (
                <MessageCard key={el.id} data={el} />
            ))
        }
      </div>
    </div>
  );
};
export default MessageList;
