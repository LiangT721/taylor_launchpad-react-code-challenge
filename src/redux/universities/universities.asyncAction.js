import { universitiesAction } from "./universities.slice";
import { store } from "../store";

export const loadingCountryList = () => {
    return async (dispatch) => {
        try{
            dispatch(universitiesAction.setCountryList([]));
            const response = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=none",
            {
                "method":'GET',
                "content-type":"application/json"
            })
            const data = await response.json();
            const list = await data.data.map(el=>el.name).sort()
            // await console.log(list);
            await dispatch(universitiesAction.setCountryList(list))
        }catch(error){
            console.log(error)
        }
        
    }
}

export const loadingUniversityList = () => {
    return async(dispatch) => {
        let country = store.getState().universities.countrySeleted;
        try{
            dispatch(universitiesAction.setUniversityList([]))
            const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
            })
            const data = await response.json();
            await dispatch(universitiesAction.setUniversityList(data))

        }catch(error){
            console.log(error)
        }

    }
}