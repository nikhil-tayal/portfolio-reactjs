import React, { Component } from "react";
import ProjectCardGeneric from "./ProjectCardGeneric/ProjectCardGeneric";

class Project extends Component {
  projectDatas = [
    {
      header: "HRMS MOBILE APP",
      description: " Its an managemennt app which combine a number of necessary HR functions, such as storing employee data, managing payrolls, recruitment processes, benefits administration, and keeping track of attendance records.",
      languageUsed: "React Native",
      time: "4 Months"
    },
    {
      header: "COLOR CHECKER",
      description: " It was React Native App to check how exactly color renders on Android and IOS. Sometimes React Native render different color ( Basically occurs for the greyish color) ",
      languageUsed: "React Native",
      time: "4 Months"
    },
    {
      header: "FLAPPY BIRDS",
      description: " Its an managemennt app",
      languageUsed: "React Native",
      time: "4 Months"
    },
    {
      header: "SNAKE GAME",
      description: " Its an managemennt app",
      languageUsed: "React Native",
      time: "4 Months"
    }
  ];
  render() {
    return (
      <div style={{ marginTop: "3%" }}>
        {this.projectDatas.map(projectData => {
          return <ProjectCardGeneric projectDatas={projectData} />;
        })}
      </div>
    );
  }
}
export default Project;
