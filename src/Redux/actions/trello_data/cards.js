import fetch from 'cross-fetch';

// Request for All Cards
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS';

export function request_all_cards(boards){
    return {
        type: 'REQUEST_ALL_CARDS',
        boards
    }
}

// Request Individual Board's Cards
export const REQUEST_CARDS = 'REQUEST_CARDS';

export function request_cards(board){
    return {
        type: 'REQUEST_CARDS',
        board
    }
}

// Individual Success
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_cards(json, board){

    console.log(json.data.children);

    let cards_obj = {};

    return {
        type: 'RECEIVE_CARDS', 
        cards: cards_obj,
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

export function fetch_cards(board){

    let cards_url = `${base_url}boards/${board}/fields=name,url&key=${key}&token=${token}`;

    return function(dispatch){

        dispatch(request_cards(board));

        return fetch(cards_url)
            .then(
                response => response.json,
                error    => dispatch(receive_cards_error(error))
            )
            .then(
                json => dispatch(receive_cards(json, board))
            )
        
    }

}