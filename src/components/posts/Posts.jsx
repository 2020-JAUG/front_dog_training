import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import moment  from 'moment';

const Posts = (props) => {

  const [post, setPost] = useState({
    user: props.credentials?.user,
    token: props.credentials?.token,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    date: props.credentials?.date,
    title: "",
    content: "",
  });

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = async () => {

    let token = props.credentials?.token;

    let user = post.user;

    let body = {
      title: post.title,
      content: post.content,
      userId: user.id,
      userName: post.name,
      lastName : post.lastName,
      date: post.date,
    };

    axios
      .get("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setUserPost(res.data.results);
        console.log('posts', res);
        // props.dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => {
        console.log("Err");
        console.log(err.response.data);
      });
  };

  if (userPost?.id) {
    return (
      <div>
        <div className="card mjs" Style="width: 18rem;">
          {userPost.map((mjs, index) => (
            <div className="card-body" key={index}>
              <img className="card-img-top" src=".../100px180/" alt="100x100" />
              <h5 className="card-title">{mjs.data.title}</h5>
              <p className="card-text">{mjs.data.content}</p>
              <p className="card-text">User &nbsp; &nbsp; {mjs.data.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No tienes posts</h1>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(Posts);