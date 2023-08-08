import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";

export default function Login({changeMessage}) {  

  changeMessage("Hello");

  const [email, setEmail] = useState("");

  const [skyMilesNumber, setSkyMilesNumber] = useState("");

  const [password, setPassword] = useState("hello");

  function validateForm() {

    if(skyMilesNumber.length > 0 && password.length > 0) {
      document.getElementById("loginButton").style.background='#a90202';
      return true;
    }

    return false;
  }

  function handleSubmit(event) {

    event.preventDefault();

    //alert(password);
    //alert(skyMilesNumber);
    changeMessage(skyMilesNumber);    

    navigate("/ccice", {state:{customerId:skyMilesNumber}});

  }


  const navigate = useNavigate();

  

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <br></br>

        <Form.Group size="lg" controlId="skyMilesNumber">

          <Form.Label>Skymiles Number</Form.Label>

          <Form.Control

            autoFocus

            type="text"

            onChange={(e) => setSkyMilesNumber(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            onChange={(e) => setPassword(e.target.value)}
            //onChange={(e) => alert(password)}

          />

        </Form.Group>

        <Button id="loginButton" className="loginButton" block size="lg" type="submit" disabled={!validateForm()}>
          
          Login

        </Button>

      </Form>

    </div>

  );

}