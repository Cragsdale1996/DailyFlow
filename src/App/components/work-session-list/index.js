import React from "react";
import { connect } from "react-redux";
import WorkSession from "../work-session";

import "./index.css"

class WorkSessionList extends React.Component {

    render(){
        return(
            <div>
                {Object.keys(this.props.work_sessions).map(session_id =>
                    <WorkSession 
                        key={session_id}
                        {...this.props.work_sessions[session_id]}
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