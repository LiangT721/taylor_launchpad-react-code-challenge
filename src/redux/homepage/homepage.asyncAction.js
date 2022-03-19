import { homepageAction } from "./homepage.slice";

export const loadMessageList = () => {
    return async (dispatch) => {
        try{
            await dispatch(homepageAction.setMessageList([]))
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

export const postMessage = (body) => {
    return async (dispatch) => {
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              })
            let dataReturn = await response.json();
            await console.log( dataReturn )
            await dispatch(homepageAction.postMessageList(dataReturn))
            await dispatch(homepageAction.setMessageSeleted(dataReturn))
            await dispatch(homepageAction.setPostPopUp())
        }catch(error){
            console.log(error)
        }
    }
}

export const editMessage = (body) => {
    return async (dispatch) => {
        // console.log(body)
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
            });
            let dataReturn = await response.json();
            await console.log( dataReturn )
            await dispatch(homepageAction.editMessage(dataReturn))
            await dispatch(homepageAction.setMessageSeleted(dataReturn))
            await dispatch(homepageAction.setEditToggle())
        }catch(error){
            console.log(error)
        }
    }
}