import React from 'react';
import { connect } from 'react-redux';
import { toggle_list } from "../../../Redux/actions";
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{

    constructor(props){
        super(props);
        this.state = { selected_board: "allowed" };
    }

    handle_select_change = (event) => {
        const new_board = event.target.value;
        this.setState({selected_board: new_board});
    }

    render(){

        const { allowed_boards, cards, lists } = this.props;
        const { selected_board } = this.state;

        const displayed_lists = Object.keys(lists).filter(id => lists[id].config.display === true);

        // Build array of cards for current board selection / collection of toggled lists
        const displayed_cards = selected_board === "allowed" ?
            Object.keys(cards).map(id => <Task key={id} {...cards[id]}/>) :
            allowed_boards[selected_board].cards
                .filter(id => displayed_lists.includes(cards[id].list))
                .map(id => <Task key={id} {...cards[id]}/>)

        // Distribute cards into 2 separate lists (for even split between columns)
        const { evens, odds } = displayed_cards.reduce((acc, payload) => {
            return acc.index%2 === 0 ? 
                { ...acc, evens: [...acc.evens, payload], index: acc.index+1 } :
                { ...acc, odds: [...acc.odds, payload], index: acc.index+1 }
        }, {evens: [], odds: [], index: 0})

        return(
            <div className="task-hub-container">

                <h4>Tasks</h4>

                <label>
                    Board:
                    <select value={selected_board} onChange={this.handle_select_change}>
                        <option value="allowed">Allowed</option>
                        {Object.keys(allowed_boards).map(id => 
                            <option value={id} key={id}>{ 
                                allowed_boards[id].name }
                            </option>
                        )}
                    </select>
                </label>

                <div>{this.render_list_toggles()}</div>

                <div>
                    Cards: {displayed_cards.length}
                </div>

                <div className="row no-gutters">
                    <div className="col-md-6">{evens}</div>
                    <div className="col-md-6">{odds}</div>
                </div>
            </div>
        );
    }

    // display helpers
    render_list_toggles = () => {
        if (this.state.selected_board === "allowed") return;
        return this.props.allowed_boards[this.state.selected_board].lists.map(id => 
            <label>
                {this.props.lists[id].name} 
                <input 
                    type="checkbox"
                    key={id} 
                    value={id}
                    checked={this.props.lists[id].config.display}
                    onChange={()=>this.props.toggle_list(id)}
                />
            </label>
        );
    }

}

const map_state_to_props = (state) => {

    const allowed_boards = Object.keys(state.trello_data.boards)
                            .reduce((acc, id) => {
                                if(state.trello_data.boards[id].config.display){
                                    return {
                                        ...acc, 
                                        [id]: state.trello_data.boards[id]
                                    };
                                }
                                else return {...acc};
                            }, {});

    return {
        allowed_boards,
        cards: state.trello_data.cards,
        lists: state.trello_data.lists
    }
}

const map_dispatch_to_props = { toggle_list };

TaskHub = connect(
    map_state_to_props,
    map_dispatch_to_props
)(TaskHub);

export default TaskHub;