import { REQUEST_CARDS,  RECEIVE_CARDS,  RECEIVE_CARDS_ERROR } from '../../actions/trello_data'; 

// Cards state diagram:

// cards: {
//     per_board_status: {
//         boards_pending: [],
//         boards_error: []
//     },
//     items: {
//         [id]: {
//             id: #,
//             name: '...',
//             description: '...',
//             board: #id,
//             list: #id
//         },
//         ...   
//     }
// }

const cards = (
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
        case REQUEST_ALL_CARDS:
            return {
                ...state,
                per_board_status: {
                    ...state.per_board_status,
                    boards_pending: action.boards
                }
            }
        case RECEIVE_CARDS:
            return {
                per_board_status:{
                    ...state.per_board_status,
                    boards_pending: state.per_board_status.boards_pending.filter(item => item !== action.board)
                },
                items:{
                    ...items,
                    ...action.cards
                }
            }
        case RECEIVE_CARDS_ERROR:
            return {
                ...state,
                per_board_status: {
                    boards_pending: state.per_board_status.boards_pending.filter(item => item !== action.board),
                    boards_errors: state.per_board_status.boards_errors.concat(action.board)
                }
            }
        default:
            return state;
    }
}