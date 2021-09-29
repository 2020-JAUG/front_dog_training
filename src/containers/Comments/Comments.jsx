import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import CommentPosts from "../../components/CommentsPost/CommentPosts";
//RDX
import { ADD_COMMENT_SUCCE, GET_COMMENTS_ERROR } from "../../redux/types";

const Comments = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [datos, setDatos] = useState({
    user: props.credentials?.user,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    content: "",
  });

  const [user_comments, set_user_commments] = useState([]);

  // Handler to upgrade the input
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  //Access to the state to take the postId
  const postId = useSelector((state) => state.post.post);

  //Call to the DDBB
  useEffect(() => {
    const fetchData = async () => {
      let token = props.credentials?.token;
      const result = await axios
      .post('https://jaug-dog-training.herokuapp.com/comments/bypostid', postId,  {
        headers: { authorization: "Bearer " + token },
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Was a mistake.",
        });
        console.log(err);
        dispatch({ payload: GET_COMMENTS_ERROR });
      })
      set_user_commments(result.data);
    };

    fetchData();
  }, [dispatch, postId, props.credentials?.token]);

  //Function to create a comment
  const comment = async (postId) => {
    let token = props.credentials?.token;
    console.log("postIDDDD", postId.id);
    let body = {
      userId: datos.user.id,
      userName: datos.name,
      lastName: datos.lastName,
      content: datos.content,
      date: new Date(),
      postId: postId.id,
    };

    axios
      .post("https://jaug-dog-training.herokuapp.com/comments", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        props.dispatch({ type: ADD_COMMENT_SUCCE, payload: res?.data });
        set_user_commments(res.data);
        setTimeout(() => {
          history.push("/commonwall");
        }, 150);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        console.log("Err");
      });
  };

  if (!user_comments[0]?.id) {
    return (
      <>
        <div>
          <div className="card comments col-md-6 offset-md-3">
            <div className="card-body">
              <h1 className="edit-post comment-title text-center">
                Add a comment
              </h1>
              <div className="form-floating">
                <textarea
                  name="content"
                  className="form-control parPost"
                  onChange={handleChange}
                  type="text"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  Style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="input-group mt-4 justify-content-center">
                <button
                  type="submit"
                  className="bottonHeader btn btn-outline-primary button_rent2 mt-4 mb-2"
                  id="send_"
                  onClick={() => comment(postId)}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="comment">
          <div className="card comments col-md-6 offset-md-3">
            <div className="card-body">
              <h1 className="edit-post comment-title text-center">
                Add a comment
              </h1>
              <div className="form-floating">
                <textarea
                  name="content"
                  className="form-control parPost"
                  onChange={handleChange}
                  type="text"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  Style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="input-group mt-4 justify-content-center">
                <button
                  type="submit"
                  className="bottonHeader btn btn-outline-primary button_rent2 mt-4 mb-2"
                  id="send_"
                  onClick={() => comment(postId)}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluir" id="margin">
        <div className="row">
        {user_comments.map((msg) => <CommentPosts key={msg.id} msg={msg} />)}
        </div>
        </div>
      </>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(Comments);
