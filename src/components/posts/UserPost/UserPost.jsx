/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Spinner from "../../Spinner/Spinner";
import Swal from "sweetalert2";

//ACTIONS OF RDX
import { removePostAction, editPost, get_user_post } from "../../../Actions/PostActions";
import store from '../../../redux/store';

const userPost = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  //Access to the states
   const userPost = useSelector((state) => state.data.post);
   const  body = store.getState().credentials.user;

   useEffect(() => {
     //Consult the API
     const findPost = () => dispatch(get_user_post(body));
    findPost();
  }, [body, dispatch]);

  const confirmRemove = (postId, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        //Take it into action
        dispatch(removePostAction(postId, userId));
      }
    });
  };

  const postToEdit = (post) => {
    dispatch(editPost(post));
    history.push("/editPost");
  };
  if (userPost[0]?.id) {
    return (
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4">
          {[...userPost].reverse().map((mjs, index) => (
            <div className="card offset-md-1 cartaUser" Style="min-width: 18rem; width: 33rem;">
              <img
                className="card-img-top"
                src=".././100px180/"
                alt="100x100"
              />
              <div className="card-body" key={index}>
                <h2 className="card-title" id="title-post">{mjs.title}</h2>
                <hr/>
                <h4 className="card-text" id="parPost">{mjs.content}</h4>
                <hr/>
                <small>
                <span className="social"><i className="fa fa-user" color="black"></i></span>&nbsp;
                  <span id="user"> {mjs.userName}</span> &nbsp;{" "}
                </small>
                &nbsp;
                <small>
                <span className="social"><i className="fa fa-clock" color="black"></i></span>&nbsp;&nbsp;{" "}
                  <span id="user">{moment(mjs.date).format("LLL")}</span>
                </small>
                <Link
                  Style="cursor:pointer; color:black;"
                  className=" m-xxl-5"
                  onClick={() => postToEdit(userPost)}
                >
                  <span className="social"><i className="fas fa-edit" color="black"></i></span>&nbsp;&nbsp;
                  <span id="user">EDIT</span>
                </Link>
                <span
                  Style="cursor:pointer;"
                  onClick={() => confirmRemove(mjs.id, mjs.userId) }
                  className="updateButton"
                >
                  <span className="social"><i className="far fa-trash-alt" color="black"></i></span>&nbsp;&nbsp;
                  <span id="user">REMOVE</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="return">
        <Spinner />
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(userPost);
