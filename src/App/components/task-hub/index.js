import React from 'react';
import { connect } from 'react-redux';
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{

    constructor(props){
        super(props);
        this.state = { selected_board: "allowed" };
    }

    handle_select_change = (event) => this.setState({selected_board: event.target.value})

    render(){

        const { boards, cards } = this.props;
        const { selected_board } = this.state;

        return(
            <div className="task-hub-container">

                <h4>Tasks</h4>

                <label>
                    Board:
                    <select value={selected_board} onChange={this.handle_select_change}>
                        <option value="allowed">Allowed</option>
                        {
                            Object.keys(boards)
                                .map(id => <option value={id} key={id}>{ boards[id].name }</option>)
                        }
                    </select>
                </label>

                <span>
                    Cards:
                    {
                        selected_board === "allowed" ? 
                            Object.keys(boards).reduce((running_sum, id) => running_sum + boards[id].cards.length, 0)
                        :
                            boards[selected_board].cards.length
                    }
                </span>

                {
                    selected_board === "allowed" ?
                        Object.keys(cards)
                            .map(id => <Task key={id} {...cards[id]}/>)
                    :
                        boards[selected_board].cards
                            .map(id => <Task key={id} {...cards[id]}/>)
                }
            </div>
        );
    }

}

const map_state_to_props = (state) => {
    return {
        boards: state.config.allowed_boards.reduce((acc, id) => {
            return {...acc, [id]: state.trello_data.boards[id]};
        }, {}),
        cards: state.trello_data.cards,
    }
}

const map_dispatch_to_props = () => {
    return {};
}

TaskHub = connect(
    map_state_to_props,
    map_dispatch_to_props
)(TaskHub);

export default TaskHub;