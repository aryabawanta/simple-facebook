import React from "react";
import Navbar from "./layouts/navbar";
import Main from "./layouts/main";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/app.scss";

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Main></Main>
        </Router>
    );
}

export default App;
