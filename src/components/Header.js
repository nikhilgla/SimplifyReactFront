import React from "react";
import { Link } from "react-router-dom";
import {  ListGroup} from "reactstrap";


const Header = () => {
    return (
        <div>
            <ListGroup horizontal className="my-2">
                <Link className="list-group-item list-group-item-action"
                    to="/"
                    tag="a"
                >
                   Simplify
                </Link>
                <Link className="list-group-item list-group-item-action"
                    to="/group"
                    tag="a"
                >
                    Group
                </Link>
                <Link className="list-group-item list-group-item-action"
                    to="/expense"
                    tag="a"
                >
                    Expense
                </Link>
            </ListGroup>
        </div>
    )
}

export default Header;