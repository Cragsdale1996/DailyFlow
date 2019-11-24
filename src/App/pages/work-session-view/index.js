import React from "react";

import "./index.css"

export default class WorkSessionView extends React.Component {
  
    state = {

    };
  
    render() {
      return (
        <div className="work-session-view">
          <div className="row">
            <div className="col-md-12">
              Henlo from Work Session View (Task-to-session mapping). 
              <br/><br/>
              I should have a section that displays trello tasks (sorted by priority). This is my "Task Hub."
              <br/><br/>
              The main section should contain today's work session "tabs" with size directly relating to length of session.
              Tasks should be able to be dragged and dropped directly into each session. Then, I should be able to configure 
              the amount of time I want to dedicate to each task.
              <br/><br/>
              Work sessions should have default-able "routines" to choose from (for patterns of action). For example, "kindling the 
              flame" should be automatically placed at the beginning of work sessions.
              <br/><br/>
              Tasks should also have reusable components that are selectable as steps. "Break into steps," "Get grasp on scope," etc...
            </div>
          </div>
        </div>
      );
    }
  
}