import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class WorkSessionCalendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            calendar_state: {
                min_time:      "00:00:00",
                max_time:      "24:00:00",
                slot_duration: "00:30:00",
                height:        755,
                weekends:      true,
                now_indicator: true,
                column_header: false,
                all_day_slot:  false,
                header: {
                  left:   false,
                  center: false,
                  right:  false
                },
                events: []
            }
        }
    }

    render(){

        return(
            <FullCalendar
              defaultView  = "timeGridDay"
              plugins      = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              ref          = {this.calendar_ref}

              minTime      = {this.state.calendar_state.min_time}
              maxTime      = {this.state.calendar_state.max_time}
              slotDuration = {this.state.calendar_state.slot_duration}
              height       = {this.state.calendar_state.height}
              allDaySlot   = {this.state.calendar_state.all_day_slot}
              columnHeader = {this.state.calendar_state.column_header}
              weekends     = {this.state.calendar_state.weekends}
              header       = {this.state.calendar_state.header}
              nowIndicator = {this.state.calendar_state.now_indicator}

              events       = {this.state.calendar_state.events}

              windowResize = {this.adjust_size}
            />
        );

    }

    create_events = (work_sessions) => {

        let events = [];

        let current_date = new Date();

        for(let i = 0; i < work_sessions.length; i++){

            const ws = work_sessions[i];

            events.push({
                title:  ws.name,
                start:  ws.start_time,
                end:    ws.end_time,
                allDay: false
            });
        }

        this.setState(prev_state => {
            let calendar_state = {...prev_state.calendar_state};
            calendar_state.events = events;
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