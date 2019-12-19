import React from "react";
import { connect } from "react-redux";
import { remove_work_session } from "../../../Redux/actions";
import './index.css';

class WorkSession extends React.Component {

    render(){

        const {
            // Session Props
            name, 
            location, 
            start,
            end, 
            total_duration,
            remaining_duration, 
            remove_work_session, 
            id,
            // Calculated Props
            categories, 
            category,
            // Display Props
            show_cards
        } = this.props;

        return (
            <div className="work-session">
                <h4>{name} - <span>({location})</span></h4>
                <div>
                    {this.render_date(start)} - {this.render_date(end)}, 
                    Remaining Duration: {remaining_duration}/{total_duration} min
                </div>
                <div>{categories[category].name}</div>
                <div>{show_cards && render_mapped_cards()}</div>
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