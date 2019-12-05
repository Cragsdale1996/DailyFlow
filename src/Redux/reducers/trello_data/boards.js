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

    console.log(json)

    let boards_obj = {}

    json.forEach(board => {
        boards_obj[board.id] = {
            id: board.id,
            name: board.name
        }
    })

    return boards_obj;
}

const boards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_BOARDS:
            return {
                ...state,
                ...build_boards(action.json)
            }
        default:
            return state;
    }       
}

export default boards;