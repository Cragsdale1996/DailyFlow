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

const build_cards = (json) => {
    let cards_obj = {}

    json.forEach(card => {
        cards_obj[json.id] = {
            id: json.id,
            name: json.name
        }
    })

    return cards_obj;
}

const cards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CARDS:
            return {
                ...state,
                ...build_cards(action.cards_json)
            }
        default:
            return state;
    }
}

export default cards;