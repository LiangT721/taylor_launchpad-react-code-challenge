import { homepageAction } from "./homepage.slice";

export const loadMessageList = () => {
    return async (dispatch) => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20",
            {
                "method":'GET',
                "content-type":"application/json"
            })
            const data = await response.json()
            await console.log(data);
            await dispatch(homepageAction.setMessageList(data))
        } catch (error) {
            console.log(error)
            alert('Loading failed')
        }
    }
}