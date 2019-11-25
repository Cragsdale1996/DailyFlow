import React from 'react';
import { connect } from 'react-redux';
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{

    state = {
        tasks: [
            {id: 1, title: "Learn Song", description: "It's about time you learned that song"},
            {id: 2, title: "Complete CPM", description: "Seriously, dude"}
        ]
    }

    render(){
        return(
            <div className="task-hub-container">
                <h4>Tasks</h4>
                {this.state.tasks.map(task => 
                    <Task
                        key={task.id}
                        {...task}
                    />
                )}
            </div>
        );
    }

}

const map_state_to_props = () => {
    return null;
}

const map_dispatch_to_props = () => {
    return null
}

TaskHub = connect(
    map_state_to_props,
    map_dispatch_to_props
)(TaskHub);

export default TaskHub;