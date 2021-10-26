import {
  GET_USER,
  GET_USER_SUCCE,
  GET_USER_ERROR,
  LOGIN,
} from "../redux/types";
import axios from "axios";
import Swal from "sweetalert2";
import store from "../redux/store";

export function handleLogin(body) {
  console.log(body);
  return async (dispatch) => {
    // dispatch(loginIn());
    await axios
      .post("http://localhost:5000/login", body)
      .then((res) => {
        dispatch(loginIn(res.data)); //This is to state
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log(err);
        // Alert error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
};

const loginIn = () => ({
  type: LOGIN,
  payload: true,
});

export function getUserActions() {
  const token = store.getState().credentials.token;

  //Note getUserActions, run the function wownloadProducts
  return async (dispatch) => {
    dispatch(downloadUsers());

    await axios
      .get("https://jaug-dog-training.herokuapp.com/users", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(downloadUserSucce(res.data)); //Put dispatch if the call is succe
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(downloadUserError());
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
};

const downloadUsers = () => ({
  type: GET_USER,
  payload: true,
});

const downloadUserSucce = (Users) => ({
  type: GET_USER_SUCCE,
  payload: Users,
});

const downloadUserError = () => ({
  type: GET_USER_ERROR,
  payload: true,
});
