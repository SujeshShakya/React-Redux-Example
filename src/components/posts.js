import React, { Component } from 'react';   
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';

class Post extends Component {

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }
      
    render() { 
        
        const postItems = this.props.posts.map(post => 
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

Post.propTypes ={
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
posts: state.posts.items,
newPost : state.posts.item
})
 
export default connect(mapStateToProps, fetchPosts)(Post);