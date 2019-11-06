import React from "react";

export default class WorkSessionForm extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            name: '',
            start_time: '',
            end_time: '',
            location: ''
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

    handleNameChange     = (event) => { this.setState({ name:       event.target.value }); }
    handleStartChange    = (event) => { this.setState({ start_time: event.target.value }); }
    handleEndChange      = (event) => { this.setState({ end_time:   event.target.value }); }
    handleLocationChange = (event) => { this.setState({ location:   event.target.value }); }

    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.onSubmittal(this.state);
        this.setState({
            name: '',
            start_time: '',
            end_time: '',
            location: ''
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
                <label>
                    Start:
                    <input 
                        type="text"
                        value={this.state.start_time}
                        onChange={this.handleStartChange}
                    />
                </label>
                <label>
                    End:
                    <input 
                        type="text"
                        value={this.state.end_time}
                        onChange={this.handleEndChange}
                    />
                </label>
                <label>
                    Location:
                    <input 
                        type="text"
                        value={this.state.location}
                        onChange={this.handleLocationChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );

    }

}