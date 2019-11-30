import { RECEIVE_BOARDS } from '../../actions/trello_data'; 

// Board state diagram:
// [id]: {
//     id: #,
//     name: '...',
//     lists: []
// }
const boards = (
    state = {
        fetching: false, 
        items: {} 
    },
    action
) => {
    switch(action.type){
        case REQUEST_BOARDS:
            return {
                fetching: true,
                items: {
                    ...items
                }
            }
        case RECEIVE_BOARDS:
            return {
                fetching: false,
                items: {
                    ...items,
                    ...action.boards
                }
            }
        case RECEIVE_BOARDS_ERROR:
            return {
                fetching: false,
                items: {
                    ...items
                }
            }
        default:
            return state;
    }       
}