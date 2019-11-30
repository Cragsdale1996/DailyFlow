import { REQUEST_LISTS,  RECEIVE_LISTS,  RECEIVE_LISTS_ERROR } from '../../actions/trello_data'; 

// List state diagram:
// [id]: {
//     id: #,
//     name: '...',
//     board: #id,
//     cards: []
// }
const lists = (
    state = { 
        items: {}
    }, 
    action
) => {
    switch(action.type){
        case REQUEST_LISTS:
        case RECEIVE_LISTS:
            return {
                items:{
                    ...items,
                    ...action.lists
                }
            }
        case RECEIVE_LISTS_ERROR:
        default:
            return state;
    }
}