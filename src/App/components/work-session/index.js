import React from "react";
import { connect } from "react-redux";
import { remove_work_session } from "../../../Redux/actions";
import './index.css';

class WorkSession extends React.Component {

    render(){
        return (
            <div className="work-session">
                <h4>{this.props.name} - <span>({this.props.location})</span></h4>
                <div>{this.render_date(this.props.start)} - {this.render_date(this.props.end)}</div>
                <div>{this.props.categories[this.props.category].name}</div>
                <button onClick={() => this.props.remove_work_session(this.props.id)}>Remove</button>
            </div>
        );
    }

    render_date = (date) => {
        let sec_str = date.getSeconds().toString();
        sec_str = sec_str.length === 1 ? "0"+sec_str : sec_str; 

        return `${date.getHours()}:${sec_str}`
    }

}

const map_state_to_props = (state) => {
    return {
        categories: state.work_sessions.categories
    };
}

const map_dispatch_to_props = { remove_work_session };

WorkSession = connect(
    map_state_to_props,
    map_dispatch_to_props
)(WorkSession);

export default WorkSession;