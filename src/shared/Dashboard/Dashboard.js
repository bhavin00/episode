'use strict'
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to dashboard...</h1>
                <Link to="/">News</Link>
            </div>
        );
    }
}

export default Dashboard;
