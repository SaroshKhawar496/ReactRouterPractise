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
  render() {
    // const post = this.state.post ? (
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
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
//second param is the props of this own component before we attach the redux store
const mapStateToProps = (state, ownProps) => {
  //grabbing the post id via ownProps (ie from react-router)
  let id = ownProps.match.params.post_id;
  return {
    //using find to cycle thru all posts in central state and returning the one we want
    post: state.posts.find(post => post.id === id)
  };
};
export default connect(mapStateToProps)(Post);
