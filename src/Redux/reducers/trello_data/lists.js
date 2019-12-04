import { RECEIVE_CHILDREN } from '../../actions/trello_data'; 

// Lists state diagram:

// lists: {
//     [id]: {
//         id: #,
//         name: '...',
//         board: #id,
//         cards: [#id, ...]
//     },
//     ...   
// }

const lists = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_LISTS:
            return {
                ...state,
                ...action.lists
            }
        default:
            return state;
    }
}

export default lists;