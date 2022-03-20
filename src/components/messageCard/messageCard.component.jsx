import React from "react";



import { homepageAction } from "../../redux/homepage/homepage.slice";
import { useSelector, useDispatch } from "react-redux";

import "./messageCard.style.scss";


const MessageCard = (props) => {
  const dispatch = useDispatch();
  const messageSeleted = useSelector((state) => state.homepage.messageSeleted);
  
  const data = props.data;
  return (
    <div 
      className={`${messageSeleted.id == data.id ? "seleted":""} message-card`}
      onClick={()=>dispatch(homepageAction.setMessageSeleted(data))} >
      <div className="message-card-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {data.title}
      </div>
      <div className="message-card-Ids d-flex justify-content-between">
      <span className="message-card-userId">User ID : {data.userId}</span>
      <span className="message-card-id">message ID : {data.id}</span>
      </div>
      <div className="message-card-content">{data.body}</div>
    </div>
  );
};

export default MessageCard;
