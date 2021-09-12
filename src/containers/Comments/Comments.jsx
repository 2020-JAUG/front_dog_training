import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { ADD_COMMENT } from '../../redux/types';

const Comments = (props) => {
  let history = useHistory();

  const [datos, setDatos] = useState({
    id: props.data?.post,
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

  const comment = async () => {
    let token = props.credentials?.token;
    // let user = datos.credentials?.user;

    // A continuamos, generamos el body de datos
    let body = {
      userId: datos.user.id,
      userName: datos.name,
      lastName: datos.lastName,
      content: datos.content,
      postId: datos.id,
    };
    console.log("body", body);
    // Envío por axios
    axios
      .post("http://localhost:5000/comments", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        props.dispatch({ type: ADD_COMMENT, payload: res?.data });
        setTimeout(() => {
          history.push("/commonwall");
        }, 150);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        console.log("Err");
      });
  };

  return (
    <div>
      <div className="card" Style="width: 18rem;">
        <div className="card-body">
          <div className="form-floating">
            <div class="form-floating">
              <textarea
                name="content"
                className="form-control"
                onChange={handleChange}
                value={datos.content}
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                Style="height: 100px"
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonSend card-footer text-center ">
        <button
          type="button"
          className="bottonHeader btn btn-outline-primary button_rent2 mt-4 mb-2"
          id="send_"
          onClick={() => comment()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(Comments);
