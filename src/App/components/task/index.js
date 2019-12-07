import React from 'react';
import { connect } from 'react-redux';

import "./index.css";

class Task extends React.Component{

    render(){
        const style = {
            border: `1px solid orange`,
            borderRadius: '10px'
        }

        return(
            <div style={style} className="task">
                <h4>{this.props.name}</h4>
                {/*<p>{this.props.description}</p>*/}
            </div>
        );
    }
}

const map_state_to_props = () => {return {};}
const map_dispatch_to_props = () => {return {};}

Task = connect(
    map_state_to_props,
    map_dispatch_to_props
)(Task);

export default Task;