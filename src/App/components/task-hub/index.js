import React from 'react';
import { connect } from 'react-redux';
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{
    render(){
        return(
            <div className="task-hub-container">
                <h4>Tasks</h4>
                {Object.keys(this.props.tasks).map(task_id => 
                    <Task
                        key={task_id}
                        {...this.props.tasks[task_id]}
                    />
                )}
            </div>
        );
    }

}

const map_state_to_props = (state) => {
    return {
        tasks: state.trello_data.cards
    }
}

const map_dispatch_to_props = () => {
    return {};
}

TaskHub = connect(
    map_state_to_props,
    map_dispatch_to_props
)(TaskHub);

export default TaskHub;