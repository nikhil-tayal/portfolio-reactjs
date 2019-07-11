import React, { Component } from 'react'
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link } from 'react-router-dom'

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
                    <Link className="navbar-brand" to="/">Nikhil Tayal</Link>
                    <button className="navbar-toggler" onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
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