// /* eslint-disable jsx-a11y/iframe-has-title */
// import React, { useState } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";

// //ACTIONS OF RDX
// import { createPostAction } from "../../Actions/PostActions";

// const MakePost = (props) => {
//   const history = useHistory();
//   const [post, ] = useState({
//     user: props.credentials?.user,
//     token: props.credentials?.token,
//     name: props.credentials?.user.name,
//     lastName: props.credentials?.user.lastName,
//     date: new Date(),
//     title: "",
//     content: "",
//   });

//   //To create a function
//   const dispatch = useDispatch();

//   //Access to the state
//   const loading = useSelector( state => state.data.loading);

//   //Here we call the action from PostActions
//   const addPost = body => dispatch(createPostAction(body));

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const SubmitPost = e => {
//     e.preventDefault();

//     //Check the form
//     if (title.trim() === "" || content.trim() === "") {
//       return;
//     }

//     let user = post.user;

//     // Create the post
//     addPost({
//       title,
//       content,
//       userName: post.name,
//       lastName: post.lastName,
//       date: new Date(),
//       userId: user.id,
//     });

//     history.push('/commonwall');
//   };
//   const [errors] = useState({
//     eValidate: "",
//   });

//   return (
//     <div className="card carta col-md-6 offset-md-3">
//       <h1 className="common">NOTICIAS</h1>
//       <div className="card-body">
//         <div className="commonWall">
//           <input
//             type="text"
//             className="form-control mb-2 border"
//             name="title"
//             value={title}
//             onChange={ e => setTitle(e.target.value)}
//             placeholder="Title"
//             aria-label="Username"
//             aria-describedby="addon-wrapping"
//           />
//           <div className="form-floating">
//             <textarea
//               className="form-control border"
//               name="content"
//               value={content}
//               onChange={ e => setContent(e.target.value)}
//               placeholder="Leave a comment here"
//               id="floatingTextarea"
//             ></textarea>
//             <label for="floatingTextarea">Post</label>
//           </div>
//           <div class="input-group mt-4">
//             <button
//               className="btn btn-outline-dark"
//               type="submit"
//               onSubmit={(e) => SubmitPost(e)}
//             >
//               To Post
//             </button>
//             <div className="errorsText">{errors.eValidate}</div>
//             <input
//               type="file"
//               className="form-control"
//               id="inputGroupFile02"
//               aria-label="Upload"
//             />
//             {loading ? (
//               <div>
//                 <div Style="width:55%">
//                   <div Style="height:0;padding-bottom:56.25%;position:relative;width:100%">
//                     <iframe
//                       allowfullscreen=""
//                       frameBorder="0"
//                       height="100%"
//                       src="https://giphy.com/embed/yPpmkMDM0tA2gMShfR/video"
//                       Style="left:0;position:absolute;top:0"
//                       width="100%"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default connect((state) => ({
//   credentials: state.credentials,
//   data: state.data.post,
// }))(MakePost);

import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { ADD_POST_SUCCE, ADD_POST_ERROR } from "../../redux/types";
import { notification } from "antd";

const MakePost = (props) => {

  const history = useHistory();

  const [post, setPost] = useState({
    user: props.credentials?.user,
    token: props.credentials?.token,
    name: props.credentials?.user.name,
    lastName: props.credentials?.user.lastName,
    date: new Date(),
    title: "",
    content: "",
  });

  const [errors] = useState({
    eValidate: "",
  });

  // Handler to upgrade the input
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const doPost = async () => {
    let token = post.token;
    let user = post.user;

    let body = {
      title: post.title,
      content: post.content,
      userName: post.name,
      lastName: post.lastName,
      date: post.date,
      userId: user.id,
    };

    // Envío por axios
    axios
      .post("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        props.dispatch({ type: ADD_POST_SUCCE, payload: res?.data});
        setPost(res.data);
        notification.success({
          message: "Post was add.",
          style: { top: 76 },
          description: "Post was add.",
        });
        setTimeout(() => {
          window.location.reload();
          history.push("/commonwall");
        }, 1000);
      })
      .catch((err) => {
        console.log("Err");
        props.dispatch({ type: ADD_POST_ERROR, payload: err?.data });
        //Alert error
        notification.error({
          message: "Error",
          style: { top: 76 },
          description: "Action canceled.",
        });
        // console.log(err.response.data);
      });
  };

  return (
    <div className="card col-md-6 offset-md-3">
      <h1 className="common">NOTICIAS</h1>
      <div className="card-body">
        <div className="commonWall">
          <input
            type="text"
            className="form-control mb-2 border"
            name="title"
            onChange={handleChange}
            value={post.title}
            placeholder="Title"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <div className="form-floating">
            <textarea
              className="form-control border"
              name="content"
              onChange={handleChange}
              value={post.content}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Post</label>
          </div>
          <div class="input-group mt-4">
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => doPost()}
            >
              To Post
            </button>
            <div className="errorsText">{errors.eValidate}</div>
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
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(MakePost);
