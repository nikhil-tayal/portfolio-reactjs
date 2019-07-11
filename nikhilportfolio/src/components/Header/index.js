import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./style.css";
import image from "../../Assets/Images/NikhilTayal.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={image} alt="Logo" className="img-thumbnail" />
        </div>
        <div class="typewriter">
          <Typing>
            <span>
              <h1>Hi, I am Nikhil</h1>
            </span>
          </Typing>
          <div>
            <h2>
              <span>About Nikhil</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
