import React from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="navbar">
                    <Link to="/" className="navItem"><h6>Home</h6></Link>
                    <Link to="/about" className="navItem"><h6>About</h6></Link>
                </div>
            </div>
        );
    }
}

export default Navbar;