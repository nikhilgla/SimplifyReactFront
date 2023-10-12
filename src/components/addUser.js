import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddUser = () => {
    return (
        <div>
            <h1>ADD USER</h1>
            <Form>
                <FormGroup>
                    <label for="username">Username</label>
                    <Input type="text" placeholder="enter username" name="username" id="username" />
                </FormGroup>
                <FormGroup>
                    <label for="password">Password</label>
                    <Input type="text" placeholder="enter pass" name="password" id="password" />
                </FormGroup>
                <FormGroup>
                    <label for="email">EMAIL</label>
                    <Input type="text" placeholder="enter email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                    <label for="mNo">mobile number</label>
                    <Input type="number" placeholder="enter number" name="mNo" id="mNo" />
                </FormGroup>
                <Container>
                    <Button color="success">Add User</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddUser;