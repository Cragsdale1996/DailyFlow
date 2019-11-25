import React from "react";
import WorkSessionDefiner from "../../components/work-session-definer";
import TaskHub from "../../components/task-hub";
import "./index.css"

export default class WorkSessionView extends React.Component {
  
    render() {
      return (
        <div className="work-session-view">
          <div className="row">
            <div className="col-md-5">
              <WorkSessionDefiner/>
            </div>
            <div className="col-md-7">
              <TaskHub/>
            </div>
          </div>
        </div>
      );
    }
  
}