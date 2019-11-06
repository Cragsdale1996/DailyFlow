import React from "react";

import "./index.css"

export default class WorkSessionList extends React.Component {
    constructor(props){
        super(props);
    }

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
                    Name: {session.name}
                    Start: {session.start_time}
                    End: {session.end_time}
                    Location: {session.location}
                </div>
            )
        }

        return rendered_sessions;
    }
}