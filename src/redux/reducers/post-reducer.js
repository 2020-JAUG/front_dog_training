import {
  ADD_POST,
  ADD_POST_SUCCE,
  ADD_POST_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_SUCCE,
  ADD_COMMENT_ERROR,
  GET_USER,
  GET_USER_SUCCE,
  GET_USER_ERROR,
  GET_POST,
  GET_POST_SUCCE,
  GET_POST_ERROR,
  GET_REMOVE_POST,
  REMOVE_POST_SUCCE,
  REMOVE_POST_ERROR,
  GET_POST_EDIT,
  EDIT_POST_SUCCE,
  EDIT_POST_ERROR,
} from "../types";

const initialState = {
  post: [{}],
  error: false,
  loading: false,
  removepost: null,
  editpost: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
    case GET_USER:
    case ADD_POST:
      return { ...state, loading: action.payload };

    case ADD_POST_SUCCE:
      return {
        ...state,
        loading: false,
        post: [...state.post, action.payload], //DotPost if to add the new post
      };

    case ADD_POST_ERROR:
    case ADD_COMMENT_ERROR:
    case GET_POST_ERROR:
    case GET_USER_ERROR:
    case REMOVE_POST_ERROR:
    case EDIT_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_USER_SUCCE:
    case GET_POST_SUCCE:
      return { ...state, loading: false, error: null, post: action.payload };

    case ADD_COMMENT:
      return { ...state, post: action.payload };

    case ADD_COMMENT_SUCCE:
      return {...state, loading: false,
        post: [...state.post, action.payload]
      }

    case GET_REMOVE_POST:
      return { ...state, removepost: action.payload };

    case REMOVE_POST_SUCCE:
      return {
        ...state,
        post: state.post.filter( post => post.id !== state.removepost), //.filter remove a post
        removepost: null,
      };

    case GET_POST_EDIT:
      return { ...state, editpost: action.payload };

    case EDIT_POST_SUCCE:
      return {
        ...state,
        editpost: null,
        post: state.post.map( posts =>
          posts.id === action.payload.id ? posts = action.payload : posts
        )
      };

    default:
      return state;
  }
};

export default postReducer;
