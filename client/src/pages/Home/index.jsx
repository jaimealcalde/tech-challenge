import React from "react";
import Cards from "../../components/Card";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import axios from 'axios';

//import ConnectWithGoogle from "../../components/ConnectWithGoogle/index.jsx";

export default function Home () {

    const getGifs = async () => {
        const gifs = await axios.get(`${process.env.REACT_APP_API_URL}/api/gif`);
        console.log(gifs.data);
        console.log('hola');
    }
    getGifs();

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