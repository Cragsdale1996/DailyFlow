import React from 'react';
import { connect } from 'react-redux';
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{

    constructor(props){
        super(props);
        this.state = { selected_board: "all" };
    }

    handle_select_change = (event) => this.setState({selected_board: event.target.value})

    render(){
        return(
            <div className="task-hub-container">
                <h4>Tasks</h4>
                <label>
                    Board:
                    <select value={this.state.selected_board} onChange={this.handle_select_change}>
                        <option value="all">All</option>
                        {
                            Object.keys(this.props.boards).map(board_id => 
                                <option value={board_id} key={board_id}>
                                    {this.props.boards[board_id].name}
                                </option>
                            )
                        }
                    </select>
                </label>
                <span>Cards: </span>
                {
                    this.state.selected_board === "all" ?
                        Object.keys(this.props.cards)
                            .map(card_id => <Task key={card_id} {...this.props.cards[card_id]}/>)
                        :
                        Object.keys(this.props.cards)
                            .filter(card_id => this.props.cards[card_id].board === this.state.selected_board)
                            .map(card_id => <Task key={card_id} {...this.props.cards[card_id]}/>)
                }
            </div>
        );
    }

}

const map_state_to_props = (state) => {
    return {
        boards: state.trello_data.boards,
        cards: state.trello_data.cards
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