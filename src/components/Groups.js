import React from "react";
import { Button, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";


const Groups = () => {
    return (
        <div>
            <h1>ADD a new Group</h1>
            <Form>
                <FormGroup>
                    <label for="groupname">Group Name</label>
                    <Input type="text" placeholder="enter group name" name="groupname" id="groupname" />
                </FormGroup>
                <FormGroup>
                    <label for="notes">Notes / Decription</label>
                    <Input type="text" placeholder="enter notes" name="notes" id="notes" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">
                        Select Multiple
                    </Label>
                    <Input
                        id="exampleSelectMulti"
                        multiple
                        name="selectMulti"
                        type="select"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>

                <Container>
                    <Button color="success" >Add User</Button>
                </Container>
            </Form>
            <hr/>
            <h3>
                Links{' '}
            </h3>
            <ListGroup>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Cras justo odio
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Dapibus ac facilisis in
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Morbi leo risus
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Porta ac consectetur ac
                </ListGroupItem>
                <ListGroupItem
                    action
                    href="#"
                    tag="a"
                >
                    Vestibulum at eros
                </ListGroupItem>
            </ListGroup>
            <p />
        </div>
    )
}

export default Groups;