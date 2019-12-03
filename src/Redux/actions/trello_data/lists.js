import fetch from 'cross-fetch';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// Request for All Boards (REMOVE THIS... DOESN'T MAKE SENSE TO HAVE ACTION FOR THIS)
export const REQUEST_ALL_LISTS = 'REQUEST_ALL_LISTS';

export function request_all_lists(boards){
    return {
        type: 'REQUEST_ALL_LISTS',
        boards
    }
}

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

export function receive_lists(lists, board_id){
    return {
        type: 'RECEIVE_LISTS', 
        lists,
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