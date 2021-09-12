import React, { useEffect } from "react";
import moment  from 'moment';

//ACTIONS OF RDX
import { connect, useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../../../Actions/PostActions";
import Forbidden from '../../403/Forbidden';

const Posts = () => {
  const dispatch = useDispatch();

   //Access to the states
   const userPost = useSelector((state) => state.post.post);

   useEffect(() => {
    //Consult the API
    const findPost = (props) => dispatch(getPostAction(props));
    findPost();
  }, [dispatch]);

  if (userPost[0]?.id) {
    return (
      <div className="returnPosts container">
      <table className="table table-responsive table-bordered border-0">
        <thead  className="thead-dark border-1 bg-dark text-white">
          <tr>
            <th scope="col" className="bg-black">User Id</th>
            <th scope="col">User</th>
            <th scope="col">Last Name</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Post Id</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {[...userPost].reverse().map((mjs, index) => (
            <tr key={index}>
              <th scope="row">{mjs.userId}</th>
              <td>{mjs.userName}</td>
              <td>{mjs.lastName}</td>
              <td>{mjs.title}</td>
              <td>{mjs.content}</td>
              <td>{mjs.id}</td>
              <td>{moment(mjs.date).format("LLL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  } else {
    return (
      <Forbidden />
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(Posts);
