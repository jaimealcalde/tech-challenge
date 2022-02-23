import React from "react";
import Cards from "../../components/Card";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
//import axios from 'axios';

//import ConnectWithGoogle from "../../components/ConnectWithGoogle/index.jsx";

export default function Home () {

    fetch('http://localhost:4000/api/gif')
            .then(response => response.json())
            .then( data => console.log(data))

    return(
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cards/>
            {/* <ConnectWithGoogle /> */}
            <h1>Home</h1>
        </div>
    );
}