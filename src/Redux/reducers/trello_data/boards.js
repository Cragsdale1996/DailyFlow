import { RECEIVE_BOARDS, LINK_CHILDREN, TOGGLE_BOARD } from '../../actions/trello_data'; 

// Boards state diagram:

// boards: {
//     [id]: {
//         config: {display: true},
//         id: #,
//         name: '...',
//         lists: [],
//         cards: []
//     }
//     ...
// }

const build_boards = (json) => {

    console.log(json)

    let boards_obj = {}

    json.forEach(board => {
        boards_obj[board.id] = {
            config: {display: true},
            id: board.id,
            name: board.name,
            cards: [],
            lists: []
        }
    })

    return boards_obj;
}

const boards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_BOARDS: {

            return {
                ...state,
                ...build_boards(action.json)
            }

        }

        case LINK_CHILDREN: {

            return {
                ...state,
                [action.board_id]: {
                    ...state[action.board_id],
                    lists: action.list_ids,
                    cards: action.card_ids
                }
            }

        }

        case TOGGLE_BOARD: {

            return {
                ...state,
                [action.board_id]: {
                    ...state[action.board_id],
                    config: {display: !state[action.board_id].config.display}
                }
            }

        }

        default: {

            return state;

        }
    }       
}

export default boards;