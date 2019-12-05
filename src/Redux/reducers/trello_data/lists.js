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

const build_lists = (json, board_id) => {
    let lists_obj = {}

    json.forEach(list => {
        lists_obj[list.id] = {
            id: list.id,
            name: list.name,
            cards: list.cards.map(card => card.id),
            board: board_id
        }
    })

    return lists_obj;
}

const lists = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CHILDREN:
            return {
                ...state,
                ...build_lists(action.json, action.board_id)
            }
        default:
            return state;
    }
}

export default lists;