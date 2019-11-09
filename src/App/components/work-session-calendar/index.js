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
            min_time:      "00:00:00",
            max_time:      "24:00:00",
            slot_duration: "00:15:00",
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
            events: this.create_events(props.sessions)
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
              slotDuration = {this.state.slot_duration}
              height       = {this.state.height}
              allDaySlot   = {this.state.all_day_slot}
              columnHeader = {this.state.column_header}
              weekends     = {this.state.weekends}
              header       = {this.state.header}
              nowIndicator = {this.state.now_indicator}

              events       = {this.state.events}

              windowResize = {this.adjust_size}
            />
        );

    }

    componentDidUpdate(prevProps){
        if(prevProps.sessions !== undefined && prevProps.sessions.length !== this.props.sessions.length){
            this.setState({events: this.create_events(this.props.sessions)})
        }
    }

    create_events = (sessions) => {

        if (sessions == null) return [];
        
        let events = [];
        for(let i = 0; i < sessions.length; i++){

            const ws = sessions[i];

            events.push({
                title:  ws.name,
                start:  new Date(),//ws.start_time,
                //end:    ws.end_time,
                allDay: false
            });
        }

        return events;

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