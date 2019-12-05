import React from 'react';
import { connect } from 'react-redux';
import WorkSession from '../work-session';

import "./index.css";

class WorkSessionDefiner extends React.Component{
    render(){
        return(
            <div className="work-session-definer-container">
                <h4>Work Sessions</h4>
                {Object.keys(this.props.work_sessions.items).map(session_id =>
                    <WorkSession 
                        key={session_id}
                        {...this.props.work_sessions.items[session_id]}
                    />
                )}
            </div>
        );
    }
}

const map_state_to_props = (state) => {
    return {
        work_sessions: state.work_sessions
    }
}

const map_dispatch_to_props = () => {
    return null
}

WorkSessionDefiner = connect(
    map_state_to_props,
    map_dispatch_to_props
)(WorkSessionDefiner);

export default WorkSessionDefiner;