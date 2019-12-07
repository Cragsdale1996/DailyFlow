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

        const allowed_boards = Object.keys(boards).map(id => <option value={id} key={id}>{ boards[id].name }</option>)

        const allowed_cards = selected_board === "allowed" ?
            Object.keys(cards).map(id => <Task key={id} {...cards[id]}/>)
            : boards[selected_board].cards.map(id => <Task key={id} {...cards[id]}/>)

        const card_count = selected_board === "allowed" ? 
            Object.keys(boards).reduce((running_sum, id) => running_sum + boards[id].cards.length, 0) 
            : boards[selected_board].cards.length

        const { evens, odds } = allowed_cards.reduce((acc, payload) => {
            if(acc.index%2 === 0) return { ...acc, evens: [...acc.evens, payload], index: acc.index+1 }
            else return { ...acc, odds: [...acc.odds, payload], index: acc.index+1 }
        }, {evens: [], odds: [], index: 0})

        return(
            <div className="task-hub-container">

                <h4>Tasks</h4>

                <label>
                    Board:
                    <select value={selected_board} onChange={this.handle_select_change}>
                        <option value="allowed">Allowed</option>
                        {allowed_boards}
                    </select>
                </label>

                <span>
                    Cards:
                    {card_count}
                </span>
                
                <div className="row no-gutters">
                    <div className="col-md-6">{evens}</div>
                    <div className="col-md-6">{odds}</div>
                </div>
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