import React from "react";

import WorkSessionCalendar from "../../components/work-session-calendar";
import WorkSessionList from "../../components/work-session-list";
import WorkSessionForm from "../../components/work-session-form";

import "./index.css"

export default class DailyView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      work_sessions: []
    };
  }

  render() {
    return (
      <div className="daily-view">
        <div className="row">

          {/* Work Session Calendar */}
          <div className="col-md-6 daily-view-calendar">
            <WorkSessionCalendar sessions={this.state.work_sessions}/>
          </div>

          <div className="col-md-6">

            {/* Work Session List */}
            <div className="work-session-list">
              <div className="title-text">Today's Work Sessions</div>
              <div className="session-list">
                <WorkSessionList/>
              </div>
            </div>

            {/* Work Session Definition Form */}
            <div className="work-session-definition-form">
              <div className="title-text">Create a New Session</div>
              <div className="session-form">
                <WorkSessionForm/>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}