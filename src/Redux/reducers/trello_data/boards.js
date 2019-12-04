import { RECEIVE_BOARDS } from '../../actions/trello_data'; 

// Boards state diagram:

// boards: {
//     [id]: {
//         id: #,
//         name: '...',
//         lists: []
//     }
//     ...
// }

const boards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_BOARDS:
            return {
                ...state,
                ...action.boards
            }
        default:
            return state;
    }       
}

export default boards;