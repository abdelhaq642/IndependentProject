import React, {Component} from 'react';
// import './App.css';
import {Nav, Navbar, FormControl, Form, Button} from "react-bootstrap";
import {Router,Link,Route} from 'react-router-dom';
import Aboutus from "./Aboutus.js";



export default class Navigationbar extends Component{
    render(){

        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">LiveSearch</Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link href="#home">Home</Nav.Link>


                    </Nav>

                </Navbar>
            </>
        );

    }
}


