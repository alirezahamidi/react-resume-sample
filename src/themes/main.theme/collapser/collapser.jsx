import React from 'react';
import "./collapser.scss";
import "animate.css/animate.min.css";
var globFunc = {};

class Collapser extends React.Component {
    state = {
        exit: false
    }

    exit = () => {
        let _state = { ...this.state, exit: true };
        this.setState(_state);
    }

    mouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = this.closeDragElement;
        document.onmousemove = this.elementDrag;
    }


    elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        let element = document.getElementById("slider")
        let diff = e.clientX + element.offsetWidth;
        if (diff + 15 < window.screen.availWidth && e.clientX > 15)
            element.style.marginLeft = (e.clientX) + "px"
        else if (diff + 15 >= window.screen.availWidth) globFunc.exit();
    }

    closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    componentDidMount() {
        this.elmnt = document.getElementById("slider");
        globFunc.exit = this.exit.bind(this);
    }

    render() {
        return (
            <div className={this.state.exit ? 'collapser exit' : 'collapser'}>
                <div className="upperSide">
                    <span className="profile row justify-content-center animate__fadeIn">
                        <span className="profile-picture col-6">
                            <div className="row justify-content-end">
                                <div className="col-6 d-flex justify-content-center">
                                    <img src="assets/images/profile256.png" alt="" />
                                </div>
                            </div>
                        </span>
                        <span className="inforamtion-container col-6">
                            <span className="info">
                                <h2>Alireza Hamidi</h2>
                                <h4>Programmer and Web Developer</h4>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="openArrow">
                    <span id="slider" className="slider" onMouseDown={this.mouseDown}>
                        <span className="slider2">
                            <h4>Slide To Enter {this.state.count}</h4>
                        </span>
                    </span>
                </div>
                <div className="lowerSide">
                    <span className="row justify-content-center">
                        <span className="welcome-container col-6">
                            <h1>Welcome</h1>
                        </span>
                    </span>
                </div>
            </div >
        );
    }
}

export default Collapser;