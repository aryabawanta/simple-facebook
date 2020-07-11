import React, { useEffect } from "react";
import Navbar from "../layouts/navbar";
import Main from "../layouts/main";
import { BrowserRouter as Router } from "react-router-dom";
import "../assets/scss/app.scss";

function App({ posts, onGetPosts }) {
    useEffect(onGetPosts, []);

    return (
        <Router>
            <Navbar></Navbar>
            <Main posts={posts}></Main>
        </Router>
    );
}

export default App;
