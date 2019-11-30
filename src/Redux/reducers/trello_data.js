import { combineReducers } from 'react-redux';
import { 
    REQUEST_BOARDS, RECEIVE_BOARDS, RECEIVE_BOARDS_ERROR,
    REQUEST_LISTS,  RECEIVE_LISTS,  RECEIVE_LISTS_ERROR,
    REQUEST_CARDS,  RECEIVE_CARDS,  RECEIVE_CARDS_ERROR,
} from '../actions/trello_data'; 

// Boards are fetched first...
// Then, Lists and Cards are fetched per board
const boards = (
    state = {
        fetching: false,
        items: {

        }
    }, 
    action
) => {

}

const lists = (
    state = {
        boards_fetching: [],
        items: {

        }
    }, 
    action
) => {

}

const cards = (
    state = {
        boards_fetching: [],
        items: {
            
        }
    }, 
    action
) => {

}