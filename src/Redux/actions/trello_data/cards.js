import fetch from 'cross-fetch';

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
    return {
        type: 'RECEIVE_CARDS', 
        json,
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