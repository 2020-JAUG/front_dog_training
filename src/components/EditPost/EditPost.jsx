import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { editPostAction } from "../../Actions/PostActions";
import { useHistory } from "react-router-dom";

const EditPost = (props) => {
  const [body, setPost] = useState({
    userId: props.credentials?.user,
    title: "",
    content: "",
  });

  //To call the action
  const dispatch = useDispatch();
  const history = useHistory();

  //Access to the states
  const postEdit = useSelector((state) => state.post.editpost);
  // const body = (body) => dispatch(editPostAction(body));

  useEffect(() => {
    setPost(postEdit);
  }, [postEdit]);

  //Read the data of the form
  const onChangeForm = (e) => {
    setPost({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const { title, content } = body;

  const submitEditPost = (e) => {
    e.preventDefault();

    // body({
    //   title,
    //   content,
    //   postId: post.id,
    //   userId: post.userId,
    // });
    // //Pass the post to the action
    dispatch(editPostAction(body));

    history.push("/commonwall");
  };
  return (
    <>
      <div className="container edit" id="edit">
        <div className="card carta col-md-6 offset-md-3">
          <h1 className="edit-post common">You post to edit</h1>
          <div className="card-body">
            <div className="commonWall">
              <input
                type="text"
                className="form-control mb-2 border title-edit"
                name="title"
                value={title}
                onChange={onChangeForm}
                placeholder="Title"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div className="form-floating">
                <textarea
                  className="form-control border text-edit"
                  name="content"
                  value={content}
                  onChange={onChangeForm}
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Post</label>
              </div>
              <div class="input-group mt-4">
                <button
                  className="btn btn-outline-dark"
                  type="submit"
                  onClick={(e) => submitEditPost(e)}
                >
                  Edit Post
                </button>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  aria-label="Upload"
                />
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
}))(EditPost);
