import React from "react";
import { connect } from "react-redux";
import { remove_work_session } from "../../../Redux/actions";
import './index.css';

class WorkSession extends React.Component {

    render(){
        return (
            <div className="work-session">
                <div>Name: {this.props.name}</div>
                <div>Start: {this.render_date(this.props.start)}</div>
                <div>End: {this.render_date(this.props.end)}</div>
                <div>Location: {this.props.location}</div>
                <button onClick={() => this.props.remove_work_session(this.props.id)}>Remove</button>
            </div>
        );
    }

    render_date = (date) => {
        return `${date.getMonth()+1}/${date.getDate()}, ${date.getHours()}:${date.getSeconds()}`
    }

}

const map_dispatch_to_props = { remove_work_session };

WorkSession = connect(
    null,
    map_dispatch_to_props
)(WorkSession);

export default WorkSession;