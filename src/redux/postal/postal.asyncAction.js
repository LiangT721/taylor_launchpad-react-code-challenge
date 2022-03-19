import { postalAction } from "./postal.slice";

export const searchPostal = (postcode) => {
    return async (dispatch) => {
      dispatch(postalAction.setInformation(null));
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${postcode}`, {
        method: "GET",
        "content-type": "application/json",
      });
      const data = await response.json();
      if (await data.country) {
        console.log("a");
        dispatch(postalAction.setInformation(data));
        dispatch(postalAction.setSearchStatus(null));
      } else {
        console.log("b");
        dispatch(postalAction.setInformation(null));
        await dispatch(
          postalAction.setSearchStatus("Postcode can not be found!")
        );
      }
    } catch (error) {
      console.log("c");
      console.log(error);
      dispatch(postalAction.setSearchStatus("Postcode can not be found!"));
    }
  };
};
