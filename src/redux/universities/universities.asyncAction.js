import { universitiesAction } from "./universities.slice";

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
            await console.log(list);
            await dispatch(universitiesAction.setCountryList(list))
        }catch(error){
            console.log(error)
        }
        
    }
}