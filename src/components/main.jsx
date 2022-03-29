import React from 'react';
import MainRouting from "./main-routing";

class Main extends React.Component {
    state = {
        data: this.props.mainData,
        language: 'en'
    }
    render() {
        return (
            <MainRouting data={this.state.data[this.state.language]}></MainRouting>
        );
    }
}

export default Main;