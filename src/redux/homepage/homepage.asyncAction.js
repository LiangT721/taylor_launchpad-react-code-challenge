import { homepageAction } from "./homepage.slice";

export const loadMessageList = () => {
  return async (dispatch) => {
    try {
      dispatch(homepageAction.setMessageList([]));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20",
        {
          method: "GET",
          "content-type": "application/json",
        }
      );
      const data = await response.json();
      if ((await data.length) > 0) {
        dispatch(homepageAction.setLoadingStatus(null));
        dispatch(homepageAction.setMessageList(data));
        dispatch(homepageAction.setMessageSeleted({ id: 0 }));
      } else {
        dispatch(homepageAction.setLoadingStatus("There is no message"));
      }
    } catch (error) {
      console.log(error);
      alert("Loading failed");
    }
  };
};

export const postMessage = (body) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let dataReturn = await response.json();
      await dispatch(homepageAction.postMessageList(dataReturn));
      await dispatch(homepageAction.setMessageSeleted(dataReturn));
      await dispatch(homepageAction.setPostPopUp());
      await dispatch(
        homepageAction.setMessagePushReturn("Message send successfully")
      );
    } catch (error) {
        dispatch(
        homepageAction.setMessagePushReturn("Message send failed")
      );
    }
  };
};

export const editMessage = (body) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${body.id}`,
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      let dataReturn = await response.json();
      await dispatch(homepageAction.editMessage(dataReturn));
      await dispatch(homepageAction.setMessageSeleted(dataReturn));
      await dispatch(homepageAction.setEditToggle());
      await dispatch(
        homepageAction.setMessagePushReturn("Message edit successfully")
      );
    } catch (error) {
      console.log(error);
      dispatch(homepageAction.setMessagePushReturn("Message edit failed"));
    }
  };
};

export const searchMessage = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(homepageAction.setMessageList([]));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "GET",
          "content-type": "application/json",
        }
      );
      const data = await response.json();
      if (await data.id) {
        dispatch(homepageAction.setLoadingStatus(null));
        dispatch(homepageAction.setMessageList([data]));
        dispatch(homepageAction.setMessageSeleted(data));
      } else {
        dispatch(homepageAction.setLoadingStatus("There is no message"));
        dispatch(homepageAction.setMessageSeleted({ id: 0 }));
      }
    } catch (error) {
      console.log(error);
      alert("Loading failed");
    }
  };
};

export const deleteMessage = (id) => {
  return async (dispatch) => {
    console.log(id);
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      dispatch(homepageAction.deleteMessage(id));
      dispatch(homepageAction.setMessageSeleted({ id: 0 }));
      dispatch(
        homepageAction.setMessagePushReturn("Message delete successfully")
      );
    } catch (error) {
        dispatch(
        homepageAction.setMessagePushReturn("Message delete failed")
      );
    }
  };
};
