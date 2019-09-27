const initState = {
  posts: [
    { id: "1", title: "ABC", body: "alphabets" },
    { id: "2", title: "DEF", body: "alphabets" },
    { id: "3", title: "GHI", body: "alphabets" }
  ]
};

//first time it runs, we pass initState to store via this rootReducer
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
