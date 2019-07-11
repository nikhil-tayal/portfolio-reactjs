import React from "react";
import "./index.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import SkillGeneric from "./SkillGeneric/index";

class Skill extends React.Component {
  webSkills = [
    "I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    "I love to make fully responsive website which is mobile friendly.",
    "I made websites on React Js and Angular Js.",
    "I know how to play with Bootstrap ,HTML ,CSS."
  ];
  mobileSkills = [
    "I love to Create Hybrid Mobile Apps for both Android and IOS accorfding to the requirement",
    "Love to make Apps using React Native",
    "Good utilization of a unified color strategy & Quick loading and responsive",
    "Make Fully secure Apps for the clients",
  ];
  render() {
    return (
      <div>
        <div
          className="display-4"
          style={{ margin: "0 auto", maxWidth: "200px"}}
        >
          <Bounce bottom>My Skills</Bounce>
        </div>

        <div className="row" style={{ marginTop: "7%" }}>
          <div
            className="col-sm-12 col-md-6 col-xl-6"
            style={{ textAlign: "center", borderRight: "2px black solid" }}
          >
            <SkillGeneric heading="Web Development" skills={this.webSkills} />
          </div>
          <div
            className="col-md-6 col-sm-12 col-xl-6"
            style={{ textAlign: "center" }}
          >
            <SkillGeneric
              heading="Mobile Development"
              skills={this.mobileSkills}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
