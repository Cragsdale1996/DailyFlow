import React from "react";

export default class WorkSessionForm extends React.Component {

    constructor(props){
        super(props);
        let [s, e] = this.get_start_end();
        this.state = {
            name: '',
            start: s,
            end: e,
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

    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.onSubmittal(this.state);

        let [s, e] = this.get_start_end();

        this.setState({
            name:     '',
            start:    s,
            end:      e,
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
                <input type="submit" value="Submit" />
            </form>
        );

    }

}