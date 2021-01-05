import {FETCH_POSTS, NEW_POST} from './types';


export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>
            response.json()
    ).then((result) => {
        dispatch({
            type: FETCH_POSTS,
            payload: result
        }) 
        
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
        // this.setState({
        // Posts: []
        // });
    }
    )
    
}

export const fetchPost = (post) => dispatch =>{
    console.log("function called");
    fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then (res => res.json())
        .then(data => 
            dispatch({
                type: NEW_POST,
                payload: data
            }) 
            );
}
