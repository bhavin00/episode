'use strict'
import React, { Component } from "react";
import logo from "../logo.svg";
import 'isomorphic-fetch';
import "../App.css";

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        let initialData;
        if (props.staticContext) {
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        this.state = {
            news: initialData
        }
    }

    static requestInitialData() {
        return fetch('http://localhost:3000/api/news')
            .then(response => response.json());
    }

    ascDsc = (data) => {
        console.log(data);

    };

    componentDidMount = () => {
        if (!this.state || !this.state.news) {
            Promise.resolve(Home.requestInitialData()).then(initialData => {
                this.setState({
                    news: initialData
                })
            })
        }
    }

    render() {
        const { news } = this.state;
        return (
            <div >
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React in the Server</h2>
                    </div>
                    <p className="App-intro">Isn't this cool?</p>
                </div>
                <button type="button" onClick={() => { this.ascDsc(news) }}>
                    Asc/Dsc
                </button>
                <ul>
                    {news && news.map(nw => {
                        return (<li key={nw.id}>{nw.title}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default Home;
