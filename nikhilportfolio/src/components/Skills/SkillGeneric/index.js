import React from "react";

class SkillGeneric extends React.Component {
  skills = this.props.skills.map(skill => {
    return (
      <ul style={{listStyleType : "none"}}>
        <li>{skill}</li>
      </ul>
    );
  });
  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <ul>{this.skills}</ul>
      </div>
    );
  }
}
export default SkillGeneric;
