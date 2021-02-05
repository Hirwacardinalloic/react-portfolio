const initState={
  blogs: []
};
const blogReducer = (state=initState, action)=>{
  switch (action.type) {
    case 'CREATE_BLOG':
      return {
        ...state,
        blogs: action.blog
      };
    case 'DELETE_BLOG':
      return state;
      // return {
      //   ...state,
      //   blogs: newBlogs
      // }
    case 'FETCH_BLOGS':
      return {
        ...state,
        blogs: action.payload
      }
    default:
      return state
    
  }
  
}

export default blogReducer;