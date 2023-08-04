import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

export default function Login() {

  const [email, setEmail] = useState("");

  const [skyMilesNumber, setSkyMilesNumber] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return skyMilesNumber.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    alert({password});

    //event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <br></br>

        <Form.Group size="lg" controlId="skyMilesNumber">

          <Form.Label>Skymiles Number</Form.Label>

          <Form.Control

            autoFocus

            type="text"

            value={skyMilesNumber}

            onChange={(e) => setSkyMilesNumber(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}
            //onChange={(e) => alert(password)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          Login

        </Button>

      </Form>

    </div>

  );

}