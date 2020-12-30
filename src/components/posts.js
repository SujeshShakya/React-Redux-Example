import React, { Component } from 'react';   

class Post extends Component {
    
      constructor(props){
        super(props);
        
        this.state = {
            posts: []
        }
      }
      
      componentDidMount(){
          console.log('the component did mount');
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response =>
                response.json()
        ).then((result) => {
             console.log(result)
            this.setState({posts: result}) 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
          Posts: []
          });
        }
      )
      }


    render() { 
        
        const postItems = this.state.posts.map(post => 
            <div key={post.id}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        )
        return (
            postItems
            );
    }
}
 
export default Post;