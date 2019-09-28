import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {
  // state = {
  //   post: null
  // };
  // componentDidMount() {
  //   //props automatically being passed down by react router.
  //   let id = this.props.match.params.post_id;
  //   axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
  //     this.setState({
  //       post: res.data
  //     });
  //   });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    //redirecting user to home
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    // const post = this.state.post ? (
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post ....</div>
    );
    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    );
  }
}
//mapStateToProps is used for selecting the part of the data from the store
//that the connected component needs.
//second param is the props of this own component before we attach the redux store
const mapStateToProps = (state, ownProps) => {
  //grabbing the post id via ownProps (ie from react-router)
  let id = ownProps.match.params.post_id;
  return {
    //using find to cycle thru all posts in central state and returning the one we want
    post: state.posts.find(post => post.id === id)
  };
};

//mapDispatchToProps is used for dispatching actions to the store.
//dispatch is a function of the Redux store. You call store.dispatch
//to dispatch an action. This is the only way to trigger a state change.
const mapDispatchToProps = dispatch => {
  return {
    //deletePost is a fxn we will call via props in thsi component,
    // to delete post from store
    //id of post we want to delete
    deletePost: id => {
      dispatch(
        // its the action that we are dispatching
        {
          type: "DELETE_POST",
          id: id
        }
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
