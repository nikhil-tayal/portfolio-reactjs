import React, { PureComponent } from "react";
import Navigation from "../src/components/navigationbar/index";
import Header from "../src/components/Header/index";
import Skill from '../src/components/Skills/index'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <div style={{margin: "100px auto" , width: "250px" }}>
          <Header />
        </div>
        <div>
            <Skill />
        </div>
      </div>
    );
  }
}
