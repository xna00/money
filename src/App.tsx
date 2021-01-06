import Nav from 'compontents/Nav';
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Layout from "./compontents/Layout";



function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/tags"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

function NoMatch() {
    return <div>NOT FOUND!</div>
}

function Tags() {
    return (
        <Layout>
            <h1>tags</h1>
        </Layout>
    );
}

function Money() {
    return <h2>Money</h2>;
}

function Statistics() {
    return <h2>Sta</h2>;
}

export default App;
