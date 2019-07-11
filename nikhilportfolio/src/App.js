import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from '../src/Pages/HomePage/index'
import ProjectPage from '../src/components/Projects/Projects'
import Navigation from "../src/components/navigationbar/index";

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Navigation} />
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" exact component={ProjectPage} />
        {/* <Route path="/about" exact component={AboutPage} />
        <Route path="/blogs" exact component={BlogPage} /> */}



        {/* <Route path="/"  component={Navigation} />
        

        <Route path ="/projects" exact component ={Project} /> */}
      </BrowserRouter>
    );
  }
}
