import React from 'react';
import { Route, Switch } from "react-router-dom";
import Resume from './resume/resume'
import About from './about/about'

class MainRouting extends React.Component {
    state = {
        data: this.props.data
    };

    render() {
        return (
            <Switch>
                <Route path="/" exact><Resume data={this.state.data} /></Route>
                <Route path="/about" exact><About data={this.state.data} /></Route>
            </Switch>
        );
    }
}

export default MainRouting;