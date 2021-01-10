import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/Nomatch";
import Tag from 'views/Tag'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/tags/:id">
                    <Tag/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
