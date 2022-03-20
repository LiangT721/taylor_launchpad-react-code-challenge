import { homepageAction } from "./homepage.slice";

export const loadMessageList = () => {
    return async (dispatch) => {
        try{
            dispatch(homepageAction.setMessageList([]))
            const response = await fetch("https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20",
            {
                "method":'GET',
                "content-type":"application/json"
            })
            const data = await response.json()
            if ( await data.length > 0 ){
                dispatch(homepageAction.setLoadingStatus(null))
                dispatch(homepageAction.setMessageList(data))
                dispatch(homepageAction.setMessageSeleted({id:0}))

            } else {
                dispatch(homepageAction.setLoadingStatus("There is no message"))
            }
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
            alert('Post failed')
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
            alert('Edit failed')
        }
    }
}

export const searchMessage = (id) => {
    return async (dispatch) => {
        try{
            await dispatch(homepageAction.setMessageList([]))
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                "method":'GET',
                "content-type":"application/json"
            })
            const data = await response.json()
            console.log(data)
            if ( await data.id ){
                console.log('aa')
                dispatch(homepageAction.setLoadingStatus(null))
                dispatch(homepageAction.setMessageList([data]))
                dispatch(homepageAction.setMessageSeleted(data))
            } else {
                console.log('bb')
                dispatch(homepageAction.setLoadingStatus("There is no message"))
                dispatch(homepageAction.setMessageSeleted({id:0}))
            }
        } catch (error) {
            console.log(error)
            alert('Loading failed')
        }
    }
}

export const deleteMessage = (id) => {
    return async(dispatch) => {
        console.log(id)
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
              })
            console.log(response)
            dispatch(homepageAction.deleteMessage(id))
            dispatch(homepageAction.setMessageSeleted({id:0}))
        }catch(error){
            alert("Delete failed")
        }
        
    }}