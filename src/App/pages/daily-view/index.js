import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import WorkSessionForm from "../../components/work-session-form";

import "./index.css"

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class DailyView extends React.Component {

  constructor(props){

    super(props);

    this.calendar_ref = React.createRef();

    this.state = {

      calendar_state: {
        min_time:      "00:00:00",
        max_time:      "24:00:00",
        slot_duration: "00:15:00",
        weekends:      true,
        now_indicator: true,
        column_header: false,
        all_day_slot:  false,
        header: {
          left:   false,
          center: false,
          right:  false
        },
        events: [
          { title: "Now", start: new Date() }
        ]
      },
      work_sessions: [

      ]
    };

  }

  render() {
    return (
      <div className="daily-view">

        <div className="row">
          <div className="col-md-6 daily-view-calendar">
            <FullCalendar
              defaultView  = "timeGridDay"
              plugins      = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              dateClick    = {this.handle_date_click}
              windowResize = {this.adjust_size}
              ref          = {this.calendar_ref}
              allDaySlot   = {this.state.calendar_state.all_day_slot}
              columnHeader = {this.state.calendar_state.column_header}
              weekends     = {this.state.calendar_state.weekends}
              header       = {this.state.calendar_state.header}
              events       = {this.state.calendar_state.events}
              minTime      = {this.state.calendar_state.min_time}
              maxTime      = {this.state.calendar_state.max_time}
              nowIndicator = {this.state.calendar_state.now_indicator}
              slotDuration = {this.state.calendar_state.slot_duration}
              height       = {755}
              editable     = {true}
            />
          </div>
          <div className="col-md-6">

            {/* Work Session List */}
            <div className="work-session-list">
              <div className="title-text">Today's Work Sessions</div>
              <div className="session-list">

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
    this.setState(prevState => ( {work_sessions: [...prevState.work_sessions, session]} ) );
    console.log(`Added Session... ${JSON.stringify(session)}`);
  }

  handle_date_click = (arg) => {
    this.create_event(arg);
  };

  create_event = (arg) => {

    let new_event = {
      title:  "Chris Cries",
      start:  arg.date,
      allDay: arg.allDay
    };

    this.setState(prev_state => {
      let calendar_state = {...prev_state.calendar_state};
      calendar_state.events = calendar_state.events.concat(new_event);
      return {calendar_state};
    });

  }

  adjust_size = (view) => {

    let new_aspect_ratio = this.get_aspect_ratio();
    let calendar_api = this.calendar_ref.current.getApi();

    calendar_api.setOption("aspectRatio", new_aspect_ratio);

    calendar_api.render();

    console.log(`Calendar's Ratio: ${calendar_api.getOption('aspectRatio')}`);
    console.log(`What I generated: ${new_aspect_ratio}`);

  }

  get_aspect_ratio = () => {

    let target_width = window.screen.width * 0.1666;

    return target_width / window.innerHeight;

  }

}