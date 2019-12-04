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

const build_lists = (json) => {
    let lists_obj = {}

    json.forEach(card => {
        lists_obj[json.id] = {
            id: json.id,
            name: json.name
        }
    })

    return lists_obj;
}

const lists = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_LISTS:
            return {
                ...state,
                ...build_lists(action.lists_json)
            }
        default:
            return state;
    }
}

export default lists;