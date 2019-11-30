import { combineReducers } from 'react-redux';
import { 
    REQUEST_BOARDS, RECEIVE_BOARDS, RECEIVE_BOARDS_ERROR,
    REQUEST_LISTS,  RECEIVE_LISTS,  RECEIVE_LISTS_ERROR,
    REQUEST_CARDS,  RECEIVE_CARDS,  RECEIVE_CARDS_ERROR,
} from '../actions/trello_data'; 

// Boards are fetched first. Then, Lists and Cards are fetched per board.

// Board state diagram:
// [id]: {
//     id: #,
//     name: '...',
//     lists: []
// }
const boards = (
    state = {
        fetching: false,
        items: {

        }
    }, 
    action
) => {

}

// List state diagram:
// [id]: {
//     id: #,
//     name: '...',
//     cards: []
// }
const lists = (
    state = {
        items: {

        }
    }, 
    action
) => {

}

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
        items: {

        }
    }, 
    action
) => {

}