import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };

  //lifecycle method in which you can make api calls to server/db
  componentDidMount() {
    //request below is async, returns a promise
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0.1) //getting first 10 posts from api
      });
    });
  }

  render() {
    const posts = this.state.posts;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet!</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
