import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';


import layout from '../pages/layout/index';
import about from '../pages/about/about';


class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={layout}></Route>
                    <Route path="/about" component={about}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig;