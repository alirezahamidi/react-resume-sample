import React, { Component } from 'react';
import Main from "../../components/main";
import { Route, Switch } from "react-router-dom";

class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact><Main /></Route>
            </Switch>
        );
    }
}

export default Routing;