import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

//connect is a fxn that returns a Higher Order Component which should then wrap Home.
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: []
  // };

  // //lifecycle method in which you can make api calls to server/db
  // componentDidMount() {
  //   //request below is async, returns a promise
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0.1) //getting first 10 posts from api
  //     });
  //   });
  // }

  render() {
    console.log(this.props);

    const posts = this.props.posts;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet!</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
//in redux, we are taking the state and mapping it onto the props of a component
const mapStateToProps = state => {
  return {
    //you define the key of this object and value comes from state in store
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
