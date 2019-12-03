import { REQUEST_ALL_LISTS, RECEIVE_LISTS, RECEIVE_LISTS_ERROR } from '../../actions/trello_data'; 

// Lists state diagram:

// lists: {
//     per_board_status: {
//         boards_pending: [#id, ...],
//         boards_error: [#id, ...]
//     },
//     items: {
//         [id]: {
//             id: #,
//             name: '...',
//             board: #id,
//             cards: [#id, ...]
//         },
//         ...   
//     }
// }

const lists = (
    state = { 
        per_board_status: {
            boards_pending: [],
            boards_error: []
        },
        items: {}
    }, 
    action
) => {
    switch(action.type){
        case REQUEST_ALL_LISTS:
            return {
                ...state,
                per_board_status: {
                    ...state.per_board_status,
                    boards_pending: action.boards
                }
            }
        case RECEIVE_LISTS:
            return {
                per_board_status:{
                    ...state.per_board_status,
                    boards_pending: state.per_board_status.boards_pending.filter(item => item !== action.board_id)
                },
                items:{
                    ...state.items,
                    ...action.lists
                }
            }
        case RECEIVE_LISTS_ERROR:
            return {
                ...state,
                per_board_status: {
                    boards_pending: state.per_board_status.boards_pending.filter(item => item !== action.board_id),
                    boards_errors: state.per_board_status.boards_errors.concat(action.board_id)
                }
            }
        default:
            return state;
    }
}

export default lists;