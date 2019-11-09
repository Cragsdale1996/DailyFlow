import React from "react";

import "./index.css"

export default class WorkSessionList extends React.Component {

    render(){
        return(
            <div>
                {[...this.render_sessions()]}
            </div>
        );
    }

    render_sessions = () => {

        let rendered_sessions = []

        for (let i = 0; i < this.props.sessions.length; i++){

            const session = this.props.sessions[i];

            rendered_sessions.push(
                <div className="work-session">
                    <div>Name: {session.name}</div>
                    <div>Start: {session.start_time}</div>
                    <div>End: {session.end_time}</div>
                    <div>Location: {session.location}</div>
                </div>
            )
        }

        return rendered_sessions;
    }
}