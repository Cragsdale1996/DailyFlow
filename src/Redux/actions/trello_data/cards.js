import fetch from 'cross-fetch';

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