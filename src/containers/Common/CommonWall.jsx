/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import MakePost from "../../components/MakePost/MakePost";
import Post from "../../components/Post/Post";

//ACTIONS OF RDX
import { getPostAction } from "../../Actions/PostActions";
import Spinner from "../../components/Spinner/Spinner";

import axios from 'axios';
import Swal from 'sweetalert2';
import { GET_POST } from "../../redux/types";
import { GET_POST_SUCCE } from '../../redux/types';
import { ADD_POST_SUCCE } from '../../redux/types';

const CommonWall = (props) => {
    const [post, setPost] = useState([]);
  const [datos] = useState({
    token: props.credentials?.token,
    user: props.credentials?.user,
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   //Consult the API
  //   const findPost = (props) => dispatch(getPostAction(props));
  //   findPost();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

    useEffect(() => {
    //Consult the API
    // const findPost = () => dispatch(getPostAction());
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = () => {
    let token = props.credentials?.token;
    let body = {
      id: datos.user.id,
    };

    axios
      .get("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setPost(res.data);
        console.log(res.data, 'res.data')
        props.dispatch({ type: GET_POST_SUCCE, payload: res.data });
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log(err);
        //But if there is an error, change the state
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
  //Access to the states
  // const post = useSelector((state) => state.data.post);
  const loading = useSelector((state) => state.post.loading);

  return (
    <>
         <MakePost />
       <div className="commonWall">
       {post[0]? (
          post.reverse().map((post) => <Post key={post.id} post={post} />)
        ) : (
           <div className="spinnerContainer">
            <Spinner />
          </div>
        )}
        {/* {post.length === 0 ? (
      <div className="spinnerContainer">
        <Spinner />
      </div>
    ) : (
      post.reverse().map((post) => <Post key={post.id} post={post} />)
    )} */}
      </div>








    {/* <div className="commonWall">
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
    </div> */}
    </>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(CommonWall);









// /* eslint-disable jsx-a11y/iframe-has-title */
// import React, { useEffect } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import MakePost from "../../components/MakePost/MakePost";
// import Post from "../../components/Post/Post";

// //ACTIONS OF RDX
// import { getPostAction } from "../../Actions/PostActions";
// import Spinner from "../../components/Spinner/Spinner";

// const CommonWall = (props) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     //Consult the API
//     const findPost = (props) => dispatch(getPostAction(props));
//     findPost();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   //Access to the states
//   // const post = useSelector((state) => state.post.post);
//   const loading = useSelector((state) => state.post.loading);

//   return (
//     <>
//       <div className="commonWall">
//         <MakePost />
//         {loading ? (
//           <div className="spinnerContainer">
//             <Spinner />
//           </div>
//         ) : null}
//         {props.post.post.length === 0 ? (
//           <div className="spinnerContainer">
//             <Spinner />
//           </div>
//         ) : (
//           props?.post.post.map((mensaje) => <Post key={mensaje.id} mensaje={mensaje} />)
//         )}
//       </div>
//     </>
//   );
// };

// export default connect((state) => ({
//   credentials: state.credentials,
//   post: state.post
// }))(CommonWall);
