import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/Button";

function SignUpForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }

    function handleSubmit(event) {

        event.preventDefault();

    }
    return (
        <div>
            <div className="Signup mt-5 ">
                <h5>Get started with Cloudflare</h5>
                <Form onSubmit={handleSubmit}>

                    <Form.Group size="lg" controlId="email">

                        <Form.Label>Email</Form.Label>

                        <Form.Control

                            autoFocus

                            type="email"

                            value={email}

                            onChange={(e) => setEmail(e.target.value)}

                        />

                    </Form.Group>

                    <Form.Group size="lg" controlId="password">

                        <Form.Label>Password</Form.Label>

                        <Form.Control

                            type="password"

                            value={password}

                            onChange={(e) => setPassword(e.target.value)}

                        />

                    </Form.Group>

                    <Button block size="lg" type="submit" >
                        {/* disabled={!validateForm()} */}

                        Sign up

                    </Button>

                </Form>
                <span>Already have an account?</span>   <Link to="/Login">Log in</Link>
            </div>
        </div>
    );
}

export default SignUpForm;