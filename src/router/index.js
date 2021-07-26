import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';


import layout from '../pages/layout/index';
import about from '../pages/about/about';
import formValidator from '../pages/formValidator/form';


class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={layout}></Route>
                    <Route path="/about" component={about}></Route>
                    <Route path="/formValidator" component={formValidator}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig;