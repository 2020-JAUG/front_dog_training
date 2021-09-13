/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import MakePost from "../../components/MakePost/MakePost";
import Post from "../../components/Post/Post";

//ACTIONS OF RDX
import { getPostAction } from "../../Actions/PostActions";
import Spinner from "../../components/Spinner/Spinner";

const CommonWall = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Consult the API
    const findPost = (props) => dispatch(getPostAction(props));
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Access to the states
  // const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);

  return (
    <>
      <div className="commonWall">
        <MakePost />
        {loading ? (
          <div className="spinnerContainer">
            <Spinner />
          </div>
        ) : null}
        {props.post.post.length === 0 ? (
          <div className="spinnerContainer">
            <Spinner />
          </div>
        ) : (
          props?.post.post.map((mensaje) => <Post key={mensaje.id} mensaje={mensaje} />)
        )}
      </div>
    </>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(CommonWall);
