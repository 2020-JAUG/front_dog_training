import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        //Este useEffect corresponde a una vez
        //el componente se HA montado. Sólo se ejecuta una vez.
        // templateLogin();
    }, []);

    useEffect(() => {
        //Este useEffect sin el array vacio como segundo argumento,
        //corresponde al estado de cada actualización del componente. Se ejecutará
        //tantas veces como se cambie el estado del componente
    });

    const checkError = async (arg) => {
        switch (arg) {
        case "email":
            if (credentials.email.length < 1 ) {
            setMensajeError({ ...msgError, eEmail: "Enter a valid mail" });
            } else {
            setMensajeError({ ...msgError, eEmail: "" });
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

    const logueame = async () => {
        // A continuamos, generamos el body de datos
        let body = {
            email: credentials.email,
            password: credentials.password,
        };

        // Envío por axios
        axios
        .post("http://localhost:5000/login", body)
        .then((res) => {
          //Guardo en RDX
          props.dispatch({ type: LOGIN, payload: res.data });

          if (!res.data.user.isAdmin) {
            history.push("/commonwall");
          } else {
            history.push("/commonwall");
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Was a mistake",
            text: "Try again.",
          });
        });
    };

  return (
    <div className="vistaLogin">
      <div className="loginCard">
        <h2 className="h2">Welcome Back!</h2>
        <br />
        <div className="box1">
          <div className="errorsText">{msgError.eEmail}</div>
          <form className="form22">
            <input
              className="input22"
              name="email"
              type="text"
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
              onChange={updateCredentials}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre23">
              <span className="text-nomb23">Password</span>
            </label>
          </form>
        </div>

        <div className="sendButton" onClick={() => logueame()}>
          LOG IN
        </div>
        <div className="errorsText">{msgError.eValidate}</div>
      </div>
    </div>
  );
};

export default connect()(Login);