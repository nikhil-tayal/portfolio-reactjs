import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from '../src/Pages/HomePage/index'
import Navigation from "../src/components/navigationbar/index";
import ProjectPage from '../src/Pages/ProjectPage/index'
import AboutPage from '../src/Pages/AboutPage/index';
import BlogPage from '../src/Pages/BlogPage/index'

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Navigation} />
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" exact component={ProjectPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/blogs" exact component={BlogPage} />
      </BrowserRouter>
    );
  }
}
