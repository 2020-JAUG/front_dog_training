import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCE,
  GET_COMMENTS_ERROR,
} from "../redux/types";
  import axios from "axios";
  import Swal from "sweetalert2";
  import store from '../redux/store';

export function get_comment_actions(body) {
  const token = store.getState().credentials.token;
  return async (dispatch) => {
    dispatch(downloadComments());

    await axios
      .post("https://jaug-dog-training.herokuapp.com/comments/bypostid", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(download_comments_succe(body)); //Put dispatch if the call is succe
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log(err);
        dispatch(download_comments_error());
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
}

const downloadComments = () => ({
  type: GET_COMMENTS,
  payload: true,
});

const download_comments_succe = (Usercomments) => ({
  type: GET_COMMENTS_SUCCE,
  payload: Usercomments,
});

const download_comments_error = () => ({
  type: GET_COMMENTS_ERROR,
  payload: true,
});
