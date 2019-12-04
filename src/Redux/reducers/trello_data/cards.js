import { RECEIVE_CHILDREN } from '../../actions/trello_data'; 

// Cards state diagram:

// cards: {
//    [id]: {
//        id: #,
//        name: '...',
//        description: '...',
//        board: #id,
//        list: #id
//    },
//    ...   
// }

const cards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CARDS:
            return {
                ...state,
                ...action.cards
            }
        default:
            return state;
    }
}

export default cards;