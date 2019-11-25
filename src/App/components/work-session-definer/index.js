import React from 'react';
import { connect } from 'react-redux';

class WorkSessionDefiner extends React.Component{
    render(){
        return(
            <div>Hey</div>
        );
    }
}

const map_state_to_props = () => {
    return null;
}

const map_dispatch_to_props = () => {
    return null
}

WorkSessionDefiner = connect(
    map_state_to_props,
    map_dispatch_to_props
)(WorkSessionDefiner);

export default WorkSessionDefiner;