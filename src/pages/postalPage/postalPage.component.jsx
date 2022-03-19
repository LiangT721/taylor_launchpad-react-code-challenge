import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { postalAction } from "../../redux/postal/postal.slice";
import { searchPostal } from "../../redux/postal/postal.asyncAction";

import PostInfoDisplay from "../../components/postInfoDisplay/postInfoDisplay.component";

import "./postalPage.style.scss";

const PostalPage = () => {
  const [postcode, setPostcode] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="postal-page d-flex flex-column">
      <div className="postal-input m-auto w-75 d-flex justify-content-center mt-5">
        <input
          className="postcode-input w-75 me-3"
          type="text"
          name='postcode'
          placeholder="Please enter the post code of the area you are looking for"
          onChange={(e)=>{setPostcode(e.target.value)}}
        />
        <button className="postcode-button button"
        onClick={()=>{
            dispatch(postalAction.setPostal(postcode));
            dispatch(postalAction.setSearchStatus('Searching'))
            dispatch(searchPostal(postcode))
        }}
        >Search</button>
      </div>
      <PostInfoDisplay />
    </div>
  );
};

export default PostalPage;
