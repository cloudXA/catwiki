import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';


import layout from '../pages/layout/index';
import about from '../pages/about/about';
import formValidator from '../pages/formValidator/form';
import progressStep from '../pages/progress/progress';
import mobileTab from '../pages/mobileTab/mobileTab';
import contentBox from '../pages/content/content';
import transpic from '../pages/transPic/transPic';
import clock from '../pages/clock/clock';


class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={layout}></Route>
                    <Route path="/about" component={about}></Route>
                    <Route path="/formValidator" component={formValidator}></Route>
                    <Route path="/progressStep" component={progressStep}></Route>
                    <Route path="/mobileTab" component={mobileTab}></Route>
                    <Route path="/content" component={contentBox}></Route>
                    <Route path="/transpic" component={transpic}></Route>
                    <Route path="/clock" component={clock}></Route>
                    
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig;