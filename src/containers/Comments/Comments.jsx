import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { ADD_COMMENT_SUCCE } from "../../redux/types";

const Comments = (props, postId) => {
  let history = useHistory();
console.log(postId, 'comments')
  const [datos, setDatos] = useState({
    id: props.data?.post.id,
    token: props.credentials?.token,
    user: props.credentials?.user,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    content: "",
  });

  // Handler to upgrade the input
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const comment = async (postId) => {
    let token = props.credentials?.token;
    // let user = datos.credentials?.user;

    // A continuamos, generamos el body de datos
    let body = {
      userId: datos.user.id,
      userName: datos.name,
      lastName: datos.lastName,
      content: datos.content,
      postId: datos.id
    };
    console.log("body", body);
    // Envío por axios
    axios
      .post("http://localhost:5000/comments", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        props.dispatch({ type: ADD_COMMENT_SUCCE, payload: res?.data });
        setTimeout(() => {
          history.push("/");
        }, 150);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        console.log("Err");
      });
  };

  return (
    <>
      <div className="edit" id="edit">
        <div className="card comments col-md-6 offset-md-3">
          <div className="card-body">
              <h1 className="edit-post comment-title text-center">Add an comment</h1>
              <div className="form-floating">
                <textarea
                  name="content"
                  className="form-control parPost"
                  onChange={handleChange}
                  value={datos.content}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  Style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="input-group mt-4 justify-content-center">
                <button
                  type="button"
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
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(Comments);
