import { REQUEST_CARDS,  RECEIVE_CARDS,  RECEIVE_CARDS_ERROR } from '../../actions/trello_data'; 

// Card state diagram:
// [id]: {
//     id: #,
//     name: '...',
//     description: '...',
//     card: #id,
//     list: #id
// }
const cards = (
    state = { 
        items: {} 
    }, 
    action
) => {
    switch(action.type){
        case REQUEST_CARDS:
        case RECEIVE_CARDS:
            return {
                items: {
                    ...items,
                    ...action.cards
                }
            }
        case RECEIVE_CARDS_ERROR:
        default:
            return state;
    }
}