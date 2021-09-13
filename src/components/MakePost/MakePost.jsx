/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
//ACTIONS OF RDX
import { createPostAction } from "../../Actions/PostActions";
import Spinner from "../Spinner/Spinner";

const MakePost = (props) => {
  // const history = useHistory();
  const [post] = useState({
    user: props.credentials?.user,
    token: props.credentials?.token,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    date: new Date(),
    title: "",
    content: "",
    image: ""
  });

  //To select a photo
  const sendHandler = e => {
    setImage(e.target.files[0])
  };
  //To create a function
  const dispatch = useDispatch();

  //Access to the state
  const loading = useSelector((state) => state.data.loading);

  //Here we call the action from PostActions
  const addPost = (body) => dispatch(createPostAction(body));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[image, setImage] = useState("");

  const SubmitPost = (e) => {
    e.preventDefault();

    //Check the form
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    // //Formate the picture
    const formdata = new FormData();
    formdata.append('image', image);
    let user = post.user;
    let token = post.token;

    // Create the post
    addPost({
      title,
      content,
      image,
      userName: post.name,
      lastName: post.lastName,
      date: new Date(),
      userId: user.id,
      token: token,
    });

    setTitle("");
    setContent("");
    setImage("");
  };
  const [errors] = useState({
    eValidate: "",
  });

  return (
    <div className="container">
      <div className="card lol col-md-8 offset-md-2">
      <div className="text-center tipeado">
          <h1 className="mt-5 tipeadoTitle">
            PREGUNTA A LA COMUNIDAD<span className="span">&#160;</span>
          </h1>
        </div>
        <div className="card-body">
          <div className="commonWall">
            <input
              type="text"
              autoFocus="autoFocus"
              className="form-control mb-2 border title-post"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <div className="form-floating">
              <textarea
                className="form-control border parPost"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Post</label>
            </div>
            <div class="input-group mt-4">
              <button
                className="btn"
                type="submit"
                onClick={(e) => SubmitPost(e)}
              >
                To Post
              </button>
              <div className="errorsText">{errors.eValidate}</div>
              <input
                onChange={sendHandler}
                type="file"
                className="form-control btn"
                id="inputGroupFile02"
                aria-label="Upload"
              />
              <button
                className="btn"
                type="submit"
                onClick={(e) => SubmitPost(e)}
              >
                Add photo
              </button>
              {loading ? (
                <div className="spinnerContainer">
                  <Spinner />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(MakePost);
