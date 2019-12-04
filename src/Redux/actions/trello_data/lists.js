import fetch from 'cross-fetch';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// Request for Individual Board's Lists
export const REQUEST_LISTS = 'REQUEST_LISTS';

export function request_lists(board_id){
    return {
        type: 'REQUEST_LISTS',
        board_id
    }
}

// Individual Success
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export function receive_lists(json, board_id){
    return {
        type: 'RECEIVE_LISTS', 
        lists_json,
        board_id
    }
}

// Individual Error
export const RECEIVE_LISTS_ERROR = 'RECEIVE_LISTS_ERROR';

export function receive_lists_error(error, board_id){
    return {
        type: 'RECEIVE_LISTS_ERROR',
        error,
        board_id
    }
}