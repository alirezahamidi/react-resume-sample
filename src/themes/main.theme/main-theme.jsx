import React from 'react';
import Navbar from './navbar/navbar';
import './main-theme.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Collapser from "./collapser/collapser";
import Main from "../../components/main";

class MainTheme extends React.Component {
    state = {
        data: this.props.mainData,
        showCollapser: true
    };

    hiddingCollapser = () => {
        this.setState({ ...this.state, showCollapser: false })
    }

    render() {
        return (
            <div className="main-body">
                <Navbar position="top" />
                <div className="container">
                    <Main mainData={this.state.data} />
                </div>
                {/* {this.state.showCollapser ? '' : <div className="container">
                </div>} */}
                {/* {this.state.showCollapser ? <Collapser /> : ''} */}

            </div>
        );
    }
}

export default MainTheme;