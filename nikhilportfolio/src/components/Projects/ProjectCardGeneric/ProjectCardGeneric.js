import React from "react";
import "./index.css";
class ProjectCardGeneric extends React.Component {
  render() {
    return (
      <div className="container card">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-xl-4 ">
            <div className="row" />
            <div className="col-md-12 heading">
              <p>{this.props.projectDatas.header}</p>
            </div>
            <div className="col-md-12 languageUsed">
            {this.props.projectDatas.languageUsed}
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-xl-8">
            {this.props.projectDatas.description}
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectCardGeneric;
