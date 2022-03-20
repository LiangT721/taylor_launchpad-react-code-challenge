import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { homepageAction } from "../../redux/homepage/homepage.slice";
import {
  editMessage,
  deleteMessage,
} from "../../redux/homepage/homepage.asyncAction";

import "./messageDetial.style.scss";

const MessageDetial = () => {
  const dispatch = useDispatch();
  const messageSeleted = useSelector((state) => state.homepage.messageSeleted);
  const editToggle = useSelector((state) => state.homepage.editToggle);
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

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

  const editingMessage = () => {
    dispatch(homepageAction.setEditToggle());
    setUserId(messageSeleted.userId);
    setContent(messageSeleted.body);
    setTitle(messageSeleted.title);
    setId(messageSeleted.id);
  };

  const submitMessage = async () => {
    const body = {
      title: title,
      body: content,
      userId: userId,
      id: id,
    };
    dispatch(editMessage(body));
  };

  return (
    <div className="message-detail position-fixed top-0">
        <div className="">
          {editToggle ? (
            <h3>
              <input
                className="edit-input"
                type="text"
                name="title"
                id=""
                value={title}
                onChange={handleChange}
              />
            </h3>
          ) : (
            <h3>{messageSeleted.title}</h3>
          )}

          <h6 className="d-flex justify-content-between mt-3 me-3">
            <span className="message-card-userId">
              USER ID : {messageSeleted.userId}
            </span>
            <span className="message-card-id">
              MESSAGE ID : {messageSeleted.id}
            </span>
          </h6>
          <hr />
          {editToggle ? (
            <p>
              <textarea
                className="edit-input"
                name="body"
                id=""
                cols="30"
                rows="4"
                value={content}
                onChange={handleChange}
              ></textarea>
            </p>
          ) : (
            <p className="">{messageSeleted.body}</p>
          )}
          <div className="btns d-flex justify-content-end me-3 mt-5">
          <button
          className="btn button me-3"
          role="button"
          onClick={editingMessage}
          >
          {`${editToggle? "Cancel" : "Edit"}`}
          </button>
          {editToggle ? (
            <button
              className="btn button me-3"
              role="button"
              onClick={submitMessage}
            >
              Submit
            </button>
          ) : (
            ""
          )}
            <button
              className="btn button"
              role="button"
              onClick={() => {
                dispatch(deleteMessage(messageSeleted.id));
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      
    </div>
  );
};
export default MessageDetial;
