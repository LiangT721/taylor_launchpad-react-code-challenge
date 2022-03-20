import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postMessage } from "../../redux/homepage/homepage.asyncAction";
import { homepageAction } from "../../redux/homepage/homepage.slice";

import "./postMessagePopup.style.scss";

const PostMessagePopup = () => {
  const postPopUp = useSelector((state) => state.homepage.postPopUp);
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "userId":
        setUserId(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;
      case "body":
        setContent(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearInput = () => {
    setUserId("");
    setContent("");
    setTitle("");
  };

  const postMessage_btn = async () => {
    console.log(userId.length)
    if (userId.length <1 || title.length < 1 || content.length < 1) {
      alert("User ID must be a number and title and content can not be empty");
    } else {
      const body = {
        title: title,
        body: content,
        userId: userId,
      };
      dispatch(postMessage(body));
      await clearInput();
    }
  };

  return (
    <div className={`${postPopUp ? "pop-up" : ""} post-message-popup`}>
      <p>title</p>
      <input
        type="text"
        name="title"
        id=""
        onChange={handleChange}
        value={title}
      />
      <p>user id</p>
      <input
        type="number"
        name="userId"
        id=""
        onChange={handleChange}
        placeholder="Please input number"
        value={userId}
      />
      <p>content</p>
      <textarea
        name="body"
        id=""
        cols="30"
        rows="4"
        value={content}
        onChange={handleChange}
      ></textarea>
      <div className="d-flex justify-content-end">
        <button
          className="button me-3"
          role="button"
          onClick={() => postMessage_btn()}
        >
          Send
        </button>
        <button
          className="button"
          role="button"
          onClick={() => dispatch(homepageAction.setPostPopUp(false))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PostMessagePopup;
