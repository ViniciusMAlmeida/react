import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Todo from './todo/todo'
import About from './about/about'

export default props => (
    <Router>
        <Switch>
            <Route path="/todos">
                <Todo />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Redirect from='*' to='/todos' />
        </Switch>
    </Router>
)