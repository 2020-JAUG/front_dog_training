/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import MakePost from "../../components/MakePost/MakePost";
import Post from "../../components/Post/Post";

//ACTIONS OF RDX
import { getPostAction } from "../../Actions/PostActions";
import Spinner from "../../components/Spinner/Spinner";

const CommonWall = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consult the API
    const findPost = (props) => dispatch(getPostAction(props));
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Access to the states
  const post = useSelector((state) => state.data.post);
  const loading = useSelector((state) => state.data.loading);

  return (
    <div className="commonWall">
      <MakePost />
      {loading ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : null}
      {post.length === 0 ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        [...post].reverse().map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(CommonWall);
