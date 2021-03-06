import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/types.js";
import Swal from "sweetalert2";

const Login = (props) => {
  const history = useHistory();

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [msgError, setMensajeError] = useState({
    eEmail: "",
    ePassword: "",
    eValidate: "",
  });

    // Esto es un Handler
  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const checkError = async (arg) => {
    switch (arg) {
      case "email":
        if(credentials.email.length < 1){
          setMensajeError({...msgError, eEmail: '*'});
        }else if (credentials.email.length < 4){
          setMensajeError({...msgError, eEmail: 'The email must be 4 characters.'});
        } else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
          setMensajeError({...msgError, eEmail: 'Valid email format example@example.com.'});
        } else {
          setMensajeError({...msgError, eEmail: ''});
        }
        break;

        case "password":
          if (credentials.password.length < 1 ) {
            setMensajeError({
              ...msgError,
              ePassword: "Please enter your password.",
            });
          } else {
            setMensajeError({ ...msgError, ePassword: "" });
          }
          break;

        default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      // A continuamos, generamos el body de datos
      let body = {
        email: credentials.email,
        password: credentials.password,
      };

      // Envío por axios
      axios
      .post("https://jaug-dog-training.herokuapp.com/login", body)
      .then((res) => {
        //Guardo en RDX
        props.dispatch({ type: LOGIN, payload: res.data });
        history.push("/commonwall");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };

  const handleKeypress = (event) => {
    const code = event.keyCode || event.which;
    if (code === 13) {//13 is the enter keycode
      //Do stuff in here
      handleSubmit(event);
    }
  };

  return (
    <div className="vistaLogin">
      <div className="loginCard">
        <h2 className="h2">Welcome &nbsp;&nbsp; Back!</h2>
        <br />
        <div className="box1">
          <div className="errorsText">{msgError.eEmail}</div>
          <form className="form22">
            <input
              className="input22"
              autoFocus="autoFocus"
              name="email"
              type="text"
              onKeyPress={handleKeypress}
              onChange={updateCredentials}
              onBlur={() => checkError("email")}
              required
            />
            <label className="lbl-nombre22">
              <span className="text-nomb22">Email</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{msgError.ePassword}</div>
          <form className="form23">
            <input
              className="input23"
              name="password"
              type="password"
              onKeyPress={handleKeypress}
              onChange={updateCredentials}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre23">
              <span className="text-nomb23">Password</span>
            </label>
          </form>
        </div>

        <div className="sendButton" onClick={(e) => handleSubmit(e)}>
          LOG IN
        </div>
        <div className="errorsText">{msgError.eValidate}</div>
      </div>
    </div>
  );
};

export default connect()(Login);