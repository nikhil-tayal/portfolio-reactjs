import React, { Component } from 'react'
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export default class Navigation extends Component {
    state = {
        collapsed: true
    }
    toggleNavbar = ()=> {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg navbar-light ">
                    <a className="navbar-brand" href="#">Nikhil Tayal</a>
                    <button className="navbar-toggler" onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}