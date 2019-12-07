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

        const { boards, cards } = this.props;
        const { selected_board } = this.state;

        return(
            <div className="task-hub-container">

                <h4>Tasks</h4>

                <label>
                    Board:
                    <select value={selected_board} onChange={this.handle_select_change}>
                        <option value="all">All</option>
                        {
                            Object.keys(boards)
                                .map(id => <option value={id} key={id}>{ boards[id].name }</option>)
                        }
                    </select>
                </label>

                <span>
                    Cards:
                    {
                        selected_board === "all" ? 
                            Object.keys(cards).length
                        :
                            boards[selected_board].cards.length
                    }
                </span>

                {
                    selected_board === "all" ?
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