import { REQUEST_BOARDS, RECEIVE_BOARDS, RECEIVE_BOARDS_ERROR } from '../../actions/trello_data'; 

// Boards state diagram:

// boards: {
//     status: {
//         pending: t/f,
//         error: t/f
//     },
//     items: {
//         [id]: {
//             id: #,
//             name: '...',
//             lists: []
//         }
//         ...
//     }
// }

const boards = (
    state = {
        status: {
            pending: false,
            error: false
        }, 
        items: {} 
    },
    action
) => {
    switch(action.type){
        case REQUEST_BOARDS:
            return {
                ...state,
                status: {
                    ...state.status,
                    pending: true
                }
            }
        case RECEIVE_BOARDS:
            return {
                status: {
                    pending: false,
                    error: false
                },
                items: {
                    ...state.items,
                    ...action.boards
                }
            }
        case RECEIVE_BOARDS_ERROR:
            return {
                ...state,
                status: {
                    pending: false,
                    error: true
                }
            }
        default:
            return state;
    }       
}

export default boards;