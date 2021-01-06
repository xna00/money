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


const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
const Main = styled.main`
flex-grow: 1;
overflow: auto;
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return <div>NOT FOUND!</div>
}

function Tags() {
    return <h2>Tags</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

function Statistics() {
    return <h2>Sta</h2>;
}

export default App;
