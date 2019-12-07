import { ALLOW_ALL_BOARDS, TOGGLE_BOARD } from '../actions';

// Config State Diagram:
// 
// config: {
//     allowed_boards: []
// }

const initial_state = { allowed_boards: [] };

const add_or_remove = (allowed_list, board_id) => {
    if(allowed_list.includes(board_id)) 
        return allowed_list.filter(id => id !== board_id);
    else 
        return allowed_list.concat(board_id);
}

const config = (state = initial_state, action) => {
    switch(action.type){
        case ALLOW_ALL_BOARDS:
            return {
                ...state,
                allowed_boards: action.board_ids
            }
        case TOGGLE_BOARD:
            return {
                ...state,
                allowed_boards: add_or_remove(state.allowed_boards, action.board_id)
            }
        default:
            return state;
    }
}

export default config;