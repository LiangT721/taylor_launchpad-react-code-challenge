import React from "react";

import { useSelector } from "react-redux";

import "./messageDetial.style.scss";

const MessageDetial = () => {
    const messageSeleted = useSelector( state => state.homepage.messageSeleted)

    return(
        <div className="message-detail col-7">
            <h3>{messageSeleted.title}</h3>
            <h5>USER ID : { messageSeleted.userId }</h5>
            <hr />
            <p>{ messageSeleted.body}</p>
        </div>
    )
}
export default MessageDetial;