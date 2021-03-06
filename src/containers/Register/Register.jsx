import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { notification } from "antd";
import Swal from "sweetalert2";

const Register = () => {

  let history = useHistory();
  // Hook
  const [datosUser, setDatosUser] = useState({
    name: "",
    lastName: "",
    password: "",
    password2: "",
    isAdmin: "",
    city: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    eName: "",
    eLastName: "",
    ePassword: "",
    ePassword2: "",
    eIsAdmin: "",
    eCity: "",
    eEmail: "",
  });

  // Handler
  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

  const checkError = (arg) => {
    switch (arg) {
      case "name":
        if(datosUser.name.length < 3){
          setErrors({...errors, eName: '*'});
      }else if(datosUser.name.length < 1){
          setErrors({...errors, eName: '*'});
      }else if (! /^[a-z AZ ñÑ,.'-]+$/i.test(datosUser.name) ) {
          setErrors({...errors, eName: '*'});
      }else{
          setErrors({...errors, eName: ''});
      }
        break;

      case "LastName":
        if(datosUser.lastName.length < 1){
          setErrors({...errors, eLastName: 'Field cannot be empty.'});
      }else if (datosUser.lastName.length < 3){
          setErrors({...errors, eLastName: 'Must be at least 3 characters.'});
      }else if (! /^[a-z ´ ,.'-]+$/i.test(datosUser.lastName) ) {
          setErrors({...errors, eLastName: 'Enter the format a valid.'});
      }else{
          setErrors({...errors, eLastName: ''});
      }
        break;

      case "email":
        if(datosUser.email.length < 1){
          setErrors({...errors, eEmail: '*'});
      }else if (datosUser.email.length < 4){
          setErrors({...errors, eEmail: 'The email must be 4 characters.'});
      }else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(datosUser.email) ) {
          setErrors({...errors, eEmail: 'Valid email format example@example.com.'});
      }else{
          setErrors({...errors, eEmail: ''});
      }
        break;

      case "password":
        if(datosUser.password.length < 1){
          setErrors({...errors, ePassword: '*'});
      }else if (datosUser.password.length < 6){
          setErrors({...errors, ePassword: 'At least 8 characters, 1 capital letter, and 1 number.'});
      }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(datosUser.password) ) {
          setErrors({...errors, ePassword: 'Enter the format a valid.'});
      }else{
          setErrors({...errors, ePassword: ''});
      }
        break;

      case "password2":
        if (datosUser.password !== datosUser.password2) {
          setErrors({ ...errors, ePassword2: "Password should be the same" });
        } else {
          setErrors({ ...errors, ePassword2: "" });
        }
        break;

      case "city":
        if(datosUser.city.length < 1){
          setErrors({...errors, eCity: '*'});
      }else if(datosUser.city.length < 4){
          setErrors({...errors, eCity: 'Must be at least 4 characters.'});
      }else if (! /^[a-z AZ ñÑ,.'-]+$/i.test(datosUser.city) ) {
          setErrors({...errors, eCity: 'Enter the format a valid.'});
      }else{
          setErrors({...errors, eCity: ''});
      }
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Check the form
    if (datosUser.name.trim() === "" || datosUser.lastName.trim() === "" || datosUser.password.trim() === "" || datosUser.password2.trim() === "" || datosUser.city.trim() === "" || datosUser.email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Was a mistake",
        text: "Try again.",
      });
      return;
    }
    let body = {
      name: datosUser.name,
      lastName: datosUser.lastName,
      password: datosUser.password,
      city: datosUser.city,
      email: datosUser.email,
    };

    axios
      .post("https://jaug-dog-training.herokuapp.com/users", body)
      .then((res) => {
        setDatosUser(res.data.results);
        Swal.fire({
          title: 'Registered User, you can now enter the community.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        history.push("/login");
      })
      .catch((err) => {//Recibo el mensaje desde el middleware del backend. checkMail.js
          notification.warning({ message: "Attention.", style: {top: 76,}, description: JSON.stringify(err.response.data.message)});
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
    <div className="vistaRegister">
      <div className="formulario1">
        <div className="errorsText">{errors.eName}</div>
        <div className="box1">
          <form className="form">
            <input
              autoFocus="autoFocus"
              className="input"
              name="name"
              type="text"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("name")}
              required
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Name</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{errors.eLastName}</div>
          <form className="form1">
            <input
              className="input1"
              name="lastName"
              type="text"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("LastName")}
              required
            />
            <label className="lbl-nombre1">
              <span className="text-nomb1">Last Name</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{errors.eEmail}</div>
          <form className="form2">
            <input
              className="input2"
              name="email"
              type="text"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("email")}
              required
            />
            <label className="lbl-nombre2">
              <span className="text-nomb2">Email</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText2">{errors.ePassword}</div>
          <form className="form3">
            <input
              className="input3"
              name="password"
              type="password"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre3">
              <span className="text-nomb3">Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText2">{errors.ePassword2}</div>
          <form className="form4">
            <input
              className="input4"
              name="password2"
              type="password"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("password2")}
              required
            />
            <label className="lbl-nombre4">
              <span className="text-nomb4">Repeat Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText2">{errors.eCity}</div>
          <form className="form5">
            <input
              className="input5"
              name="city"
              type="text"
              onKeyPress={handleKeypress}
              onChange={updateFormulario}
              onBlur={() => checkError("city")}
              required
            />
            <label className="lbl-nombre5">
              <span className="text-nomb5">City</span>
            </label>
          </form>
        </div>

        <div className="registerButton" onClick={(e) => handleSubmit(e)}>
          GET STARTED
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credential: state.credential,
}))(Register);