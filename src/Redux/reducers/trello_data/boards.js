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

const build_boards = (json) => {
    let boards_obj = {}

    json.forEach(board => {
        boards_obj[json.id] = {
            id: json.id,
            name: json.name
        }
    })

    return boards_obj;
}

const boards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_BOARDS:
            return {
                ...state,
                ...build_boards(action.boards_json)
            }
        default:
            return state;
    }       
}

export default boards;