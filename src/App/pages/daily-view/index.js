import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import WorkSessionCalendar from "../../components/work-session-calendar";
import WorkSessionList from "../../components/work-session-list";
import WorkSessionForm from "../../components/work-session-form";

import "./index.css"

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

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
                <WorkSessionList sessions={this.state.work_sessions} />
              </div>
            </div>

            {/* Work Session Definition Form */}
            <div className="work-session-definition-form">
              <div className="title-text">Create a New Session</div>
              <div className="session-form">
                <WorkSessionForm onSubmittal={this.add_work_session}/>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  add_work_session = (session) => {
    session.start_time = this.convert_to_date(session.start_time) 
    session.end_time = this.convert_to_date(session.end_time)

    this.setState(prevState => ( {work_sessions: [...prevState.work_sessions, session]} ) );
  }

  convert_to_date = (time_string) => {
    return time_string
  }

}