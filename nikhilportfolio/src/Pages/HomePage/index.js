import React from "react";
import Header from "../../components/Header/index";
import Skill from '../../components/Skills/index';
import { Route } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />        
        <Skill />
      </div>
    );
  }
}
export default HomePage;
