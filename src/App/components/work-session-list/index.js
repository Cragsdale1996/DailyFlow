import React from "react";
import { connect } from "react-redux";
import WorkSession from "../work-session";

import "./index.css"

class WorkSessionList extends React.Component {

    render(){
        return(
            <div>
                {this.props.work_sessions.map(session =>
                    <WorkSession 
                        key={session.id}
                        {...session}
                    />
                )}
            </div>
        );
    }    
}

const map_state_to_props = (state) => { 
    return {
        work_sessions: state.work_sessions
    }; 
}

WorkSessionList = connect(
    map_state_to_props
)(WorkSessionList);

export default WorkSessionList;