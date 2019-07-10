import React from "react";
import "./index.css";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import SkillGeneric from "./SkillGeneric/index";

class Skill extends React.Component {
    webSkills=[
        "1","2","2"
    ];
    mobileSkills=[1,2,3,4]
  render() {
    return (
      <div>
        <div
          className="display-4"
          style={{ margin: "0 auto", maxWidth: "200px" }}
        >
          <Bounce bottom>My Skills</Bounce>
        </div>

        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col-sm-12 col-md-6 col-xl-6"
            style={{ textAlign: "center", borderRight: "2px black solid" }}
          >
            <SkillGeneric heading="Web Development" skills={this.webSkills}/>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-6" style={{textAlign:"center"}}>
            <SkillGeneric heading="Mobile Development" skills={this.mobileSkills} />
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
