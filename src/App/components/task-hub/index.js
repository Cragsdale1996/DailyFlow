import React from 'react';
import { connect } from 'react-redux';
import Task from "../task";

import "./index.css";

class TaskHub extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            selected_board: "allowed",
            lists: {}
        };
    }

    handle_select_change = (event) => {
        const new_board = event.target.value;
        if(new_board === "allowed"){
            this.setState({
                selected_board: new_board, 
                lists: {}
            });
        }
        else {
            const lists_obj = {};
            this.props.boards[new_board].lists.forEach(id => lists_obj[id] = {id, display: true});
            this.setState({
                selected_board: new_board,
                lists: lists_obj
            });
        }
    }

    handle_list_toggle = (event) => {
        const list_id = event.target.value;
        const lists = this.state.lists;
        this.setState({ 
           lists: {
               ...lists,
               [list_id]: {
                    ...lists[list_id],
                    display: !lists[list_id].display
               }
           }
        });
    }

    render_list_toggles = () => {
        return Object.keys(this.state.lists).map(id => 
            <label>
                {this.props.lists[id].name} 
                <input 
                    type="checkbox"
                    key={id} 
                    value={id}
                    checked={this.state.lists[id].display}
                    onChange={this.handle_list_toggle}
                />
            </label>
        );
    }

    render(){

        const { boards, cards } = this.props;
        const { selected_board, lists } = this.state;

        const toggled_lists = Object.keys(lists).filter(id => lists[id].display === true);

        // Build array of allowed board html options
        const allowed_boards = Object.keys(boards).map(id => <option value={id} key={id}>{ boards[id].name }</option>)

        // Build array of cards for current board selection / collection of toggled lists
        const allowed_cards = selected_board === "allowed" ?
            Object.keys(cards).map(id => <Task key={id} {...cards[id]}/>) :
            boards[selected_board].cards
                .filter(id => toggled_lists.includes(cards[id].list))
                .map(id => <Task key={id} {...cards[id]}/>)

        const card_count = selected_board === "allowed" ? 
            Object.keys(boards).reduce((running_sum, id) => running_sum + boards[id].cards.length, 0) :
            boards[selected_board].cards
                .filter(id => toggled_lists.includes(cards[id].list))  
                .length

        // Distribute cards into 2 separate lists (for even split between columns)
        const { evens, odds } = allowed_cards.reduce((acc, payload) => {
            return acc.index%2 === 0 ? 
                { ...acc, evens: [...acc.evens, payload], index: acc.index+1 }
                : { ...acc, odds: [...acc.odds, payload], index: acc.index+1 }
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

                <div>
                    Cards:
                    {card_count}
                </div>

                <div>
                    {this.render_list_toggles()}
                </div>

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
        lists: state.trello_data.lists
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