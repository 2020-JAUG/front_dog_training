import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Pensando from "../../assets/Buenos_modales/perro-pensando.png";
import Spinner from "../../components/Spinner/Spinner";
//RDX
import { connect, useDispatch } from "react-redux";
import { get_user_post } from '../../Actions/PostActions';
// import store from '../../redux/store';

const Profile = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();


  const userPost = () => {
    // const  body = store.getState().credentials.user.id;
    dispatch(get_user_post());
    // console.log(body, '<--profile')
    history.push("/userPost");
  };
  if (props.credentials?.token) {
    return (
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="page-content page-container" id="page-content">
          <div className="padding ">
            <div className="row container d-flex justify-content-center">
              <div className="col-ms-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-12 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-black">
                        <div className="profile-img perfil img-center" id="img-center">
                          <img
                            src={Pensando}
                            className="profile-img"
                            alt="100x100"
                          />{" "}
                          <div className="file btn btn-lg" Style="cursor:pointer;">
                            Change Photo
                            <input type="file" name="file" />
                          </div>
                        </div>
                        <h4 className="f-w-600 mt-4 ant-col-md-offset-1">
                          Welcome&nbsp; &nbsp; {props.credentials?.user.name}
                        </h4>
                      </div>
                    </div>
                    <div className="col-ms-9 text-center">
                      <div className="card-block">
                        <h3 className="m-b-20 p-b-5 b-b-default f-w-600 text-center">
                          Information
                        </h3>
                        <br />
                        <div className="row">
                          <div className="col-xl-6">
                            <h4 className="m-b-20  f-w-600">Email</h4>
                            <h6 className="f-w-400">
                              {props.credentials?.user.email}
                            </h6>
                            <br />
                          </div>
                          <div className="col-sm-6">
                            <h4 className="m-b-20 f-w-600">City</h4>
                            <h6>{props.credentials?.user.city}</h6>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="m-b-20 f-w-600">CREATE COUNT</h4>
                            <h6 className="f-w-400">
                              {moment(props.credentials?.user.createdAt).format(
                                "LL"
                              )}
                            </h6>
                          </div>
                        </div>
                        <br />
                        <h4 className="m-b-20 m-t-20 p-b-5 b-b-default f-w-600">
                          Settings
                        </h4>
                        <br />
                        <div className="row">
                          <div className="col-sm-6">
                            <h4
                              className="m-b-10 f-w-600"
                              Style="cursor:pointer;"
                              // onClick={() => history.push("/userpost")}
                              onClick={() => userPost(props.userId)}
                              >
                              POSTS
                            </h4>
                          </div>
                          <div className="col-sm-6">
                            <h4
                              className="m-b-10 f-w-600"
                              Style="cursor:pointer;"
                              onClick={() => history.push("/updateuser")}
                            >
                              Update
                            </h4>
                          </div>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      history.push("/");
    }, 250);

    return (
      <div className="">
        <Spinner />
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post
}))(Profile);
