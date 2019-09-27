const initState = {
  posts: []
};

//first time it runs, we pass initState to store via this rootReducer
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
