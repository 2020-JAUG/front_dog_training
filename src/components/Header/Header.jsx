import React from "react";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";
import { useHistory } from "react-router-dom";
import Training from '../Training/Training';
import logo from "../../assets/Buenos_modales/pata1.png";

const Header2 = (props) => {
  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    history.push("/");
  };

  if (props.credentials.user?.name) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top header">
        <div className="container-fluid">
            <img onClick={() => history.push("/")} className="logoHeader" src={logo} alt="logo" height="78em" width="76"/>
          <button
            className="navbar-toggler burguer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center" Style="cursor:pointer;">
              <li className="nav-item" Style="cursor:pointer;">
              <div className="text-center linkLogout mt-2 header" onClick={() => history.push("/commonwall")}>COMUNIDAD&nbsp; &nbsp;</div>
              </li>
              <li className="nav-item text" Style="cursor:pointer;">
              <div className="text-center linkLogout mt-2" onClick={() => history.push("/contact")}>CONTÁCTANOS&nbsp; &nbsp;</div>
              </li>
              <li className="nav-item">
              </li>
                <Training />&nbsp; &nbsp;

            </ul>
                <div className="text-center linkLogout" Style="cursor:pointer;" onClick={() => history.push("/profile")}  >{props.credentials?.user.name} &nbsp; &nbsp; </div>
                <span>&nbsp; &nbsp;</span>
                <div className="linkLogout text-center" onClick={() => logOut()}>LOGOUT</div>
          </div>
        </div>
      </nav>
    );
  } else {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top header" Style="border: none;">
        <div className="container-fluid">
            <img onClick={() => history.push("/")} className="logoHeader" src={logo} alt="logo" height="78em" width="76"/>
          <button
            className="navbar-toggler burguer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
              <li className="nav-item" Style="cursor:pointer;">
              <div className="text-center mt-3 about linkLogout" onClick={() => history.push("/aboutus")}>SOBRE NOSOTROS&nbsp; &nbsp;</div>
              </li>
              <li><a href="{}"><div id="google_translate_element"></div></a></li>
              <li className="nav-item" Style="cursor:pointer;">
              <div className="text-center mt-3 about linkLogout" onClick={() => history.push("/contact")}>CONTÁCTANOS&nbsp; &nbsp;</div>
              </li>
              <li className="nav-item about" Style="cursor:pointer;">
                <div className="text-center mt-3 linkLogout" onClick={() => history.push("/trainers")}>ADIESTRADORES</div>
              </li>

            </ul>
                <div className="text-center text-black about linkLogout" onClick={() => history.push("/login")} Style="cursor:pointer;">LOG IN</div>  &nbsp; &nbsp;
                <div className="text-center text-black about linkLogout" onClick={() => history.push("/register")} Style="cursor:pointer;">SIGN UP</div>
          </div>
        </div>
      </nav>
    )
  }
}
export default connect((state) => ({
  credentials: state.credentials,
}))(Header2);