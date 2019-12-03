import fetch from 'cross-fetch';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// API call thunks

export function fetch_all_cards(boards_ids){
    return function(dispatch){
        boards_ids.forEach(board_id => {
            dispatch(fetch_cards(board_id))
        });
    }
}

export function fetch_cards(board_id){

    let cards_url = `${base_url}boards/${board_id}/fields=name,url&key=${key}&token=${token}`;

    return function(dispatch){

        dispatch(request_cards(board_id));

        return fetch(cards_url)
            .then(
                response => response.json,
                error    => dispatch(receive_cards_error(error))
            )
            .then(
                json => dispatch(receive_cards(json, board_id))
            )
        
    }

}

// Request for All Cards (REMOVE THIS... DOESN'T MAKE SENSE TO HAVE ACTION FOR THIS)
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS';

export function request_all_cards(boards){
    return {
        type: 'REQUEST_ALL_CARDS',
        boards
    }
}

// Request Individual Board's Cards
export const REQUEST_CARDS = 'REQUEST_CARDS';

export function request_cards(board_id){
    return {
        type: 'REQUEST_CARDS',
        board_id
    }
}

// Individual Success
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_cards(json, board_id){

    console.log(json);

    let cards_obj = {};

    return {
        type: 'RECEIVE_CARDS', 
        cards: cards_obj,
        board_id
    }
}

// Individual Error
export const RECEIVE_CARDS_ERROR = 'RECEIVE_CARDS_ERROR';

export function receive_cards_error(error, board_id){
    return {
        type: 'RECEIVE_CARDS_ERROR',
        error,
        board_id
    }
}