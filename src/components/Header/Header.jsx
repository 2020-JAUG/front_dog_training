import React from "react";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Buenos_modales/pata1.png";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    history.push("/");
  };

  if (props.credentials.user?.name) {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="dark"
          fixed="top"
          className="text-center"
        >
          <Navbar.Brand href="">
            <img
              onClick={() => history.push("/")}
              src={logo}
              height="78em"
              width="76"
              className="d-inline-block align-top logoHeader"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" id="bgInfo"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#features"
                onClick={() => history.push("/commonwall")}
                id="linkLogout"
              >
                COMUNIDAD
              </Nav.Link>
              <Nav.Link
                href="#features"
                onClick={() => history.push("/contact")}
                id="linkLogout"
              >
                CONTÁCTANOS
              </Nav.Link>
              <NavDropdown title="ADIESTRAMIENTO" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  className="text-center dropdown"
                  onClick={() => history.push("/trainers")}
                  href="#action/3.1"
                >
                  Adiestradores
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-center dropdown"
                  onClick={() => history.push("/buenosmodales")}
                  href="#action/3.2"
                >
                  Buenos Modales
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-center dropdown"
                  onClick={() => history.push("/ejercicios")}
                  href="#action/3.3"
                >
                  Ejercicios
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-center dropdown"
                  onClick={() => history.push("/obedienciabasica")}
                  href="#action/3.4"
                >
                  Obediencia Básica
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-center dropdown"
                  onClick={() => history.push("/alimentacion")}
                  href="#action/3.4"
                >
                  Salud
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link
                href="#deets"
                onClick={() => history.push("/profile")}
                id="linkLogout"
              >
                {props.credentials?.user.name} &nbsp; &nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                id="linkLogout"
                onClick={() => logOut()}
              >
                SIGN OUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="dark"
          fixed="top"
          className="text-center"
        >
          <Navbar.Brand href="">
            <img
              onClick={() => history.push("/")}
              src={logo}
              height="78em"
              width="76"
              className="d-inline-block align-top logoHeader"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" id="bgInfo"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#features"
                onClick={() => history.push("/aboutus")}
                id="linkLogout"
              >
                SOBRE NOSOTROS
              </Nav.Link>
              <Nav.Link
                href="#features"
                onClick={() => history.push("/contact")}
                id="linkLogout"
              >
                CONTÁCTANOS
              </Nav.Link>
              <Nav.Link
                href="#features"
                onClick={() => history.push("/trainers")}
                id="linkLogout"
              >
                ADIESTRADORES
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#deets"
                onClick={() => history.push("/register")}
                id="linkLogout"
              >
                SIGN UP &nbsp; &nbsp;
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                id="linkLogout"
                onClick={() => history.push("/login")}
              >
                LOG IN &nbsp;&nbsp;
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
};
export default connect((state) => ({
  credentials: state.credentials,
}))(Header);
