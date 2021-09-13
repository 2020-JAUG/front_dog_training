import {
  ADD_POST,
  ADD_POST_SUCCE,
  ADD_POST_ERROR,
  GET_POST,
  GET_POST_SUCCE,
  GET_POST_ERROR,
  GET_REMOVE_POST,
  REMOVE_POST_SUCCE,
  REMOVE_POST_ERROR,
  GET_POST_EDIT,
  START_EDIT_POST,
  EDIT_POST_SUCCE,
  EDIT_POST_ERROR,
  // ADD_COMMENT,
} from "../redux/types";
import axios from "axios";
import Swal from "sweetalert2";
import store from "../redux/store";

export function createPostAction(body) {
  const token = store.getState().credentials.token;
  console.log(body, 'ACTIONS')
  return async (dispatch) => {
    dispatch(addPost());
    await axios
      .post("https://jaug-dog-training.herokuapp.com/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(addPostSucce(body)); //This is to state
        console.log('sin .text', res)
        //Alert
        Swal.fire("Correct", "The post was added successfully.", "success");
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(addPostError(true));
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
};

const addPost = () => ({
  type: ADD_POST,
  payload: true,
});
//If the product is saved in the database and modificate the state
const addPostSucce = (body) => ({
  type: ADD_POST_SUCCE,
  payload: body,
});

//If there was an error. state take the state of error
const addPostError = (state) => ({
  type: ADD_POST_ERROR,
  payload: state,
});

export function getPostAction() {
  const token = store.getState().credentials.token;
  //Note getPostAction, run the function wownloadProducts
  return async (dispatch) => {
    dispatch(downloadPost());

    await axios
      .get("https://jaug-dog-training.herokuapp.com/post", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(downloadPostSucce(res.data)); //Put dispatch if the call is succe
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(downloadPostError());
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
};

const downloadPost = () => ({
  type: GET_POST,
  payload: true,
});

const downloadPostSucce = (Userposts) => ({
  type: GET_POST_SUCCE,
  payload: Userposts,
});

const downloadPostError = () => ({
  type: GET_POST_ERROR,
  payload: true,
});

//Get userPosts
export function get_user_post(body) {
  const token = store.getState().credentials.token;
  return async (dispatch) => {
    dispatch(download_user_post());

    await axios
      .post("https://jaug-dog-training.herokuapp.com/post/userpost", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(user_post_succe(res.data)); //Put dispatch if the call is succe
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.data);
        dispatch(user_post_error());
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
};

const download_user_post = () => ({
  type: GET_POST,
  payload: true,
});

const user_post_succe = (body) => ({
  type: GET_POST_SUCCE,
  payload: body,
});

const user_post_error = () => ({
  type: GET_POST_ERROR,
  payload: true,
});

//Select && remove a post
export function removePostAction(postId, userId) {
  const token = store.getState().credentials.token;
  return async (dispatch) => {
    //Here we collect the identifiers
    dispatch(get_remove_post(postId, userId));

    await axios
      .put(
        "https://jaug-dog-training.herokuapp.com/post/deletepost",
        { postId, userId },
        {
          headers: { authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        //If it is eliminated show alert
        dispatch(removeSucce());
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are not the owner of this post.",
        });
        console.log(err);
        dispatch(removeError());
      });
  };
};

const get_remove_post = (postId, userId) => ({
  type: GET_REMOVE_POST,
  payload: postId,
  userId,
});

const removeSucce = () => ({
  type: REMOVE_POST_SUCCE,
});

const removeError = () => ({
  type: REMOVE_POST_ERROR,
  payload: true,
});

// Put product on edition
export function editPost(post) {
  return (dispatch) => {
    dispatch(getPostEdit(post));
  };
}

const getPostEdit = (post) => ({
  type: GET_POST_EDIT,
  payload: post,
});

//Edit a record in the API and status
export function editPostAction(body) {
  const token = store.getState().credentials.token;
  return async (dispatch) => {
    dispatch(startEdit());
    await axios
      .put("https://jaug-dog-training.herokuapp.com/post/updatepost", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(editSucce(body)); //Put dispatch if the call is succe
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.data);
        dispatch(editError());
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You don't have authorization.",
        });
      });
  };
};
//To show the edition
const startEdit = () => ({
  type: START_EDIT_POST,
});

const editSucce = (body) => ({
  type: EDIT_POST_SUCCE,
  payload: body,
});

const editError = () => ({
  type: EDIT_POST_ERROR,
  payload: true,
});
