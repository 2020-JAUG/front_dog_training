import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Pensando from "../../../assets/Buenos_modales/zyro-image (4).png";
import Forbidden from "../../../components/403/Forbidden";

const Admin = (props) => {
  let history = useHistory();

  if (props.credentials?.user.isAdmin === true) {
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

        <div className="page-content page-container " id="page-content">
          <div className="padding ">
            <div className="row container d-flex justify-content-center">
              <div className="col-ms-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-12 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-black">
                        <div className="m-b-25">
                          {" "}
                          <img
                            src={Pensando}
                            className="img-fluid rounded-circle"
                            alt="100x100"
                          />{" "}
                        </div>
                        <h4 className="f-w-600">
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
                            <h6 className="f-w-400 datos-user">
                              {props.credentials?.user.email}
                            </h6>
                            <br />
                          </div>
                          <div className="col-sm-6">
                            <h4 className="m-b-20 f-w-600">City</h4>
                            <h6 className="f-w-400 datos-user">{props.credentials?.user.city}</h6>
                          </div>
                          <div className="col-sm-6 offset-md-3">
                            <h4 className="m-b-20 f-w-600">CREATE COUNT</h4>
                            <h6 className="f-w-400 datos-user">
                              {moment(props.credentials?.user.createdAt).format(
                                "LL"
                              )}
                            </h6>
                          </div>
                        </div>
                        <br />
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
                              onClick={() => history.push("/posts")}
                            >
                              POSTS
                            </h4>
                          </div>
                          <div className="col-sm-6">
                            <h4
                              className="m-b-10 f-w-600"
                              Style="cursor:pointer;"
                              onClick={() => history.push("/allusers")}
                            >
                              USERS
                            </h4>
                          </div>
                          <div className="col-sm-12">
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
    return (
      <div>
        <Forbidden />
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(Admin);
