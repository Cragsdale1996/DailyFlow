import React from "react";
import { connect } from "react-redux";
import { add_work_session } from "../../../Redux/actions";

class WorkSessionForm extends React.Component {

    constructor(props){
        super(props);
        let [s, e] = this.get_start_end();
        this.state = {
            name: '',
            start: s,
            end: e,
            location: '',
            category: 0
            //billing: {
            //    is_billable: false,
            //    hourly_rate: 0,
            //    organization: '' 
            //},
            //people: [
            //
            //]
        };
    }

    get_start_end = () => {
        let sd = new Date(Date.now());

        let s = `${sd.getFullYear()}-${sd.getMonth()+1}-${sd.getDate()}T${sd.getHours()+1}:00`;
        let e = `${sd.getFullYear()}-${sd.getMonth()+1}-${sd.getDate()}T${sd.getHours()+2}:00`;

        return [s, e];
    }

    handle_name_change     = (event) => this.setState({ name:     event.target.value })
    handle_start_change    = (event) => this.setState({ start:    event.target.value })
    handle_end_change      = (event) => this.setState({ end:      event.target.value })
    handle_location_change = (event) => this.setState({ location: event.target.value })
    handle_select_change   = (event) => this.setState({ category: event.target.value })

    handle_submit = (event) => { 
        event.preventDefault();
        this.props.add_work_session(this.state);
        let [s, e] = this.get_start_end();
        this.setState({
            name:     '',
            start:    s,
            end:      e,
            location: '',
            category: 0
        })
    }

    render(){

        const { name, start, end, location, category } = this.state;
        const { categories } = this.props;

        return(
            <form onSubmit={this.handle_submit}>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={name}
                        onChange={this.handle_name_change}
                    />
                </label>
                <br/>
                <label>
                    Start:
                    <input 
                        type="datetime-local"
                        value={start}
                        onChange={this.handle_start_change}
                    />
                </label>
                <br/>
                <label>
                    End:
                    <input 
                        type="datetime-local"
                        value={end}
                        onChange={this.handle_end_change}
                    />
                </label>
                <br/>
                <label>
                    Location:
                    <input 
                        type="text"
                        value={location}
                        onChange={this.handle_location_change}
                    />
                </label>
                <br/>
                <label>
                    Category:
                    <select value={category} onChange={this.handle_select_change}>
                        {Object.keys(categories).map(category_id => 
                            <option value={category_id} key={category_id}>
                                {categories[category_id].name}
                            </option>
                        )}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );

    }

}

const map_state_to_props = (state) => { 
    return { categories: state.work_sessions.categories }; 
};
const map_dispatch_to_props = { add_work_session }

WorkSessionForm = connect(
    map_state_to_props,
    map_dispatch_to_props
)(WorkSessionForm);

export default WorkSessionForm;