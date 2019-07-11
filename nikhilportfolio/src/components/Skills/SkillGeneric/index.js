import React from "react";

class SkillGeneric extends React.Component {
  skills = this.props.skills.map(skill => {
    return (
      <ul style={{listStyleType : "none"}}>
        <li style={{fontFamily:"'Roboto Slab', serif" , fontSize: "1.2em" , marginTop: "3%"}}>{skill}</li>
      </ul>
    );
  });
  render() {
    return (
      <div>
        <h1 style={{marginLeft:"15%"}}>{this.props.heading}</h1>
        <ul >{this.skills}</ul>
      </div>
    );
  }
}
export default SkillGeneric;
