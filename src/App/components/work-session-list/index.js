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
                    <div>Start: {this.render_date(session.start)}</div>
                    <div>End: {this.render_date(session.end)}</div>
                    <div>Location: {session.location}</div>
                </div>
            )
        }

        return rendered_sessions;
    }

    render_date = (date) => {
        return `${date.getMonth()+1}/${date.getDate()}, ${date.getHours()}:${date.getSeconds()}`
    }
}