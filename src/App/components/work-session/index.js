import React from "react";
import { connect } from "react-redux";
import { remove_work_session } from "../../../Redux/actions";
import './index.css';

class WorkSession extends React.Component {

    render(){

        const {name, location, start,end, min_duration, categories, category, remove_work_session, id} = this.props;

        return (
            <div className="work-session">
                <h4>{name} - <span>({location})</span></h4>
                <div>
                    {this.render_date(start)} - {this.render_date(end)}, 
                    Duration: {min_duration} min
                </div>
                <div>{categories[category].name}</div>
                <button onClick={() => remove_work_session(id)}>Remove</button>
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
        categories: state.categories.work_session
    };
}

const map_dispatch_to_props = { remove_work_session };

WorkSession = connect(
    map_state_to_props,
    map_dispatch_to_props
)(WorkSession);

export default WorkSession;