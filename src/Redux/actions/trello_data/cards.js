import fetch from 'cross-fetch';

// Request for All Cards
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS';

export function request_all_cards(boards){
    return {
        type: 'REQUEST_ALL_CARDS',
        boards
    }
}

// Individual Success
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_cards(cards, board){
    return {
        type: 'RECEIVE_CARDS', 
        cards,
        board
    }
}

// Individual Error
export const RECEIVE_CARDS_ERROR = 'RECEIVE_CARDS_ERROR';

export function receive_cards_error(error, board){
    return {
        type: 'RECEIVE_CARDS_ERROR',
        error,
        board
    }
}

// API call thunk

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

export function fetch_card(board){

}