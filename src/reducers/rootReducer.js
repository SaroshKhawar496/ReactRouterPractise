const initState = {
  posts: [
    { id: "1", title: "ABC", body: "alphabets" },
    { id: "2", title: "DEF", body: "alphabets" },
    { id: "3", title: "GHI", body: "alphabets" }
  ]
};

//first time it runs, we pass initState to store via this rootReducer
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state, //spread what is already in the state
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
