import React from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import pensando from "../../assets/Buenos_modales/orejon.png";
//RDX
import { connect, useDispatch } from "react-redux";
// import { remove_comment_actions, editPost, post_to_comment } from "../../Actions/CommentsActions";

const CommentPosts = ( { msg } ) => {
  const { content, lastName, date, userName, id, userId } = msg;

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
        // dispatch(remove_comment_actions(postId, userId));
      }
    });
  };
  //Pass the post to RDX
//   const postToEdit = (post) => {
//     dispatch(editPost(post));
//     history.push("/editPost");
//   };

//   const doComment = (postId) => {
//     console.log(msg.id,'commentId-desde-post.jsx')
//     dispatch(post_to_comment(postId));
//     history.push("/comments");
//   };

  return (
    <>
      <div className="container-fluir" id="margin">
        <div className="row justify-content-evenly row-cols-2" id="row-comment">
          <div className="row mt-lg-3">
            <div>
              <div className="card carta border-0 border-dark mb-4 mt-lg-0">
                <div className="card-body carta">
                  <p className="card-text parPost">{content}</p>
                  <hr />
                  <small className="">
                    <span className="social">
                    <div className="profile-comment comment img-center" id="img-center">
                        <img
                            src={pensando}
                            className="profile-img"
                            alt="100x100"
                        />
                    </div>
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
                    className=" m-xxl-3"
                    // onClick={() => doComment(id, msg)}
                  >
                    <span className="social">
                      <i className="fa fa-comments" color="black"></i>
                    </span>
                    &nbsp; &nbsp;<span className="user">COMMENT</span>
                  </span>
                  &nbsp; &nbsp;
                  <Link
                    Style="cursor:pointer; color:black;"
                    // onClick={() => postToEdit(id)}
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
    </>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(CommentPosts);
