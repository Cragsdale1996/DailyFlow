import React from "react";
import { connect } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class WorkSessionCalendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            min_time:      "00:00:00",
            max_time:      "24:00:00",
            scroll_time:   "05:30:00",
            slot_duration: "00:30:00",
            height:        755,
            weekends:      true,
            now_indicator: true,
            column_header: false,
            all_day_slot:  false,
            header: {
                left:   'title',
                center: false,
                right:  'prev,next'
            }
        }

        this.calendar_ref = React.createRef();
    }

    render(){

        return(
            <FullCalendar
              defaultView  = "timeGridDay"
              plugins      = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref          = {this.calendar_ref}

              minTime      = {this.state.min_time}
              maxTime      = {this.state.max_time}
              scrollTime   = {this.state.scroll_time}
              slotDuration = {this.state.slot_duration}
              height       = {this.state.height}
              allDaySlot   = {this.state.all_day_slot}
              columnHeader = {this.state.column_header}
              weekends     = {this.state.weekends}
              header       = {this.state.header}
              nowIndicator = {this.state.now_indicator}

              events       = {this.props.daily_events}

              windowResize = {this.adjust_size}
            />
        );

    }
    
    adjust_size = (view) => {
        let new_aspect_ratio = this.get_aspect_ratio();
        let calendar_api = this.calendar_ref.current.getApi();

        calendar_api.setOption("aspectRatio", new_aspect_ratio);

        calendar_api.render();
    }

    get_aspect_ratio = () => {
        let target_width = window.screen.width * 0.1666;
        return target_width / window.innerHeight;
    }
}

const map_state_to_props = (state) => {

    const daily_events = Object.keys(state.work_sessions.items).map(
        session_id => state.work_sessions.items[session_id].daily_event
    );

    return { daily_events: daily_events };
}

WorkSessionCalendar = connect(
    map_state_to_props
)(WorkSessionCalendar);

export default WorkSessionCalendar;