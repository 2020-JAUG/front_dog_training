import React, { useEffect } from "react";
import Forbidden from '../../../components/403/Forbidden';
//ACTIONS OF RDX
import { connect, useDispatch, useSelector } from "react-redux";
import { getUserActions } from "../../../Actions/UserActions";

const AllUsers = (props) => {
  const dispatch = useDispatch(props.credentials?.token);

  //Access to the states
  const users = useSelector((state) => state.data.post);

  useEffect(() => {
    //Consult the API
    const findUsers = (token) => dispatch(getUserActions(token));
    findUsers();
  }, [dispatch]);

  if (users[0]?.id) {
    return (
      <div className="returnPosts container">
        <table className="table table-responsive table-bordered border-0">
          <thead className="thead-dark border-1 bg-dark text-white">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
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
  data: state.data.post
}))(AllUsers);
