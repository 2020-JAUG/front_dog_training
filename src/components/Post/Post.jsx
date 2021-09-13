import React from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
//RDX
import { connect, useDispatch } from "react-redux";
import { removePostAction, editPost, do_comment_post } from "../../Actions/PostActions";

const Post = ( props ) => {
  const { title, content, lastName, date, userName, id, userId } = props.mensaje;

  const dispatch = useDispatch();
  const history = useHistory();

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
  //Pass the post to RDX
  const postToEdit = (post) => {
    dispatch(editPost(post));
    history.push("/editPost");
  };

  const doComment = (postId) => {
    console.log(postId,'commentId-desde-post.jsx')
    dispatch(do_comment_post(postId));
    history.push("/comments");
  };

  return (
    <div>
      <div className="container-fluir">
        <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
          <div className="row  mt-lg-5">
            <div>
              <div className="card carta border-0 border-dark mb-4 mt-lg-5">
                <div className="card-body carta">
                  <img
                    className="card-img-top"
                    src=".../100px180/"
                    alt="100x100"
                  />
                  <h2 className="card-title title-post">{title}</h2>
                  <hr />
                  <p className="card-text parPost">{content}</p>
                  <hr />
                  <small className="">
                    <span className="social">
                      <i className="fa fa-user" color="black">
                        &nbsp;&nbsp;
                      </i>
                    </span>
                    &nbsp;
                    <span className="user"> {userName}</span> &nbsp;{" "}
                    <span className="user"> {lastName}</span> &nbsp; &nbsp;
                  </small>{" "}
                  &nbsp;
                  <small>
                    <span className="social">
                      <i className="fa fa-clock" color="black">
                        &nbsp;&nbsp;
                      </i>
                    </span>
                    &nbsp;
                    <span className="user">{moment(date).format("LLL")}</span>
                  </small>{" "}
                  &nbsp; &nbsp;
                  <span
                    Style="cursor:pointer;"
                    className=" m-xxl-5"
                    onClick={() => doComment(id)}
                  >
                    <span className="social">
                      <i className="fa fa-comments" color="black"></i>
                    </span>
                    &nbsp; &nbsp;<span className="user">COMMENT</span>
                  </span>
                  <Link
                    Style="cursor:pointer; color:black;"
                    className=" m-xxl-5"
                    onClick={() => postToEdit(props.mensaje)}
                  >
                    <span className="social">
                      <i className="fa fa-edit" color="black"></i>
                    </span>
                    &nbsp; &nbsp;
                    <span className="user">EDIT</span>
                  </Link>
                  &nbsp; &nbsp;
                  <span
                    Style="cursor:pointer;"
                    onClick={() => confirmRemove(id, userId)}
                    className="updateButton"
                  >
                    <span className="social">
                      <i className="fa fa-trash-alt" color="black"></i>
                    </span>
                    &nbsp; &nbsp;<span className="user">REMOVE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(Post);
