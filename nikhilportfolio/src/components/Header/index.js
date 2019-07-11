import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./style.css";
import image from "../../Assets/Images/NikhilTayal.jpg";

class Header extends Component {
  render() {
    return (
      <div style={{marginBottom:"100px"}}>
        <div style={{ margin: "100px auto", width: "250px" }}>
          <div>
            <img src={image} alt="Logo" className="img-thumbnail" />
          </div>
          <div class="typewriter">
            <Typing>
              <span>
                <h1>Hi, I am Nikhil</h1>
              </span>
            </Typing>
          </div>
        </div>
        <div style={{ margin: "0 auto", width: "960px" }}>
          <h2>About Nikhil</h2>
          <p
            style={{
              textAlign: "center",
              fontFamily: "'Dosis', sans-serif",
              fontSize: "1.6em"
            }}
          >
            I am a Web Developer and UI/UX Javascript specialist. My current
            focus is on the React JS, React Native and Angular JS Check out my
            blog articles on React JS and Angular JS UI components at my code
            laboratory . Feel free to take a look at my latest projects on the
            web portfolio page .
            <p>
              Based on Delhi , India. Enquires at{" "}
              <a href="mailto:nikhiltayal9211@gmail.com" target="_top">
                nikhiltayal9211@gmail.com
              </a>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
