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

const build_cards = (json, board_id) => {
    let cards_obj = {}

    json.forEach(list => {

        list.cards.forEach(card => {

            cards_obj[card.id] = {
                id: card.id,
                name: card.name,
                description: card.desc,
                board: board_id,
                list: list.id
            }

        })

    })

    return cards_obj;
}

const cards = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CHILDREN: {

            return {
                ...state,
                ...build_cards(action.json, action.board_id)
            }

        }

        default: {

            return state;

        }
    }
}

export default cards;