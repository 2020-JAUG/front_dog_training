/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MakePost from "../../components/MakePost/MakePost";
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import Swal from "sweetalert2";
//RDX
import { GET_POST_SUCCE } from "../../redux/types";

const CommonWall = (props) => {
  const [post, setPost] = useState([]);
  const [datos] = useState({
    token: props.credentials?.token,
    user: props.credentials?.user,
  });

  useEffect(() => {
    findPost();
  }, []);

  const findPost = () => {
    let token = props.credentials?.token;
    let body = {
      id: datos.user.id,
    };

    axios
      .get("https://jaug-dog-training.herokuapp.com/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setPost(res.data);
        props.dispatch({ type: GET_POST_SUCCE, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };

  if (post[0]?.id) {
    return (
      <div className="commonWall">
      <MakePost />
        <div className="movieImage">
          <div className="fondoIMage"></div>
        </div>
        <div className="movieContent">
          {post.reverse().map((msg) => <Post key={msg.id} msg={msg} /> )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <Spinner />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(CommonWall);
