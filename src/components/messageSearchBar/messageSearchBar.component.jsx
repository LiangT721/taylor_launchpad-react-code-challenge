import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  searchMessage,
  loadMessageList,
} from "../../redux/homepage/homepage.asyncAction";
import { homepageAction } from "../../redux/homepage/homepage.slice";

import "./messageSearchBar.style.scss";

const MessageSearchBar = () => {
  const dispatch = useDispatch();
  const [searchId, setSearchId] = useState("");

  const handleChange = (e) => {
    setSearchId(e.target.value);
  };

  const searchMessage_btn = () => {
    dispatch(homepageAction.setLoadingStatus("Loading"));
    if (searchId === "") {
      dispatch(loadMessageList());
    } else {
      dispatch(searchMessage(searchId));
    }
  };

  return (
    <div className="message-search-bar mt-3 w-100 d-flex justify-content-between">
      <input
        className="w-75 me-3"
        type="text"
        placeholder="Please input the id of message"
        onChange={handleChange}
      />
      <button className="button" onClick={searchMessage_btn}>
        Search
      </button>
    </div>
  );
};

export default MessageSearchBar;
