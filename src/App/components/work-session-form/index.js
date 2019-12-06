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

    handleNameChange     = (event) => { this.setState({ name:     event.target.value }); }
    handleStartChange    = (event) => { this.setState({ start:    event.target.value }); }
    handleEndChange      = (event) => { this.setState({ end:      event.target.value }); }
    handleLocationChange = (event) => { this.setState({ location: event.target.value }); }
    handleSelectChange   = (event) => { this.setState({ category: event.target.value }); }

    handleSubmit = (event) => { 
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

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </label>
                <br/>
                <label>
                    Start:
                    <input 
                        type="datetime-local"
                        value={this.state.start}
                        onChange={this.handleStartChange}
                    />
                </label>
                <br/>
                <label>
                    End:
                    <input 
                        type="datetime-local"
                        value={this.state.end}
                        onChange={this.handleEndChange}
                    />
                </label>
                <br/>
                <label>
                    Location:
                    <input 
                        type="text"
                        value={this.state.location}
                        onChange={this.handleLocationChange}
                    />
                </label>
                <br/>
                <label>
                    Category:
                    <select value={this.state.category} onChange={this.handleSelectChange}>
                        {Object.keys(this.props.categories).map(category_id => 
                            <option value={category_id} key={category_id}>
                                {this.props.categories[category_id].name}
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