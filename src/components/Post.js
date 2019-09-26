import React, { Component } from "react";

class Post extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    //props automatically being passed down by react router.
    let id = this.props.match.params.post_id;
    this.setState({
      id: id
    });
  }
  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    );
  }
}

export default Post;
