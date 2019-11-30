import fetch from 'cross-fetch';

// Request for All Boards
export const REQUEST_ALL_LISTS = 'REQUEST_ALL_LISTS';

export function request_all_lists(boards){
    return {
        type: 'REQUEST_ALL_LISTS',
        boards
    }
}

// Individual Success
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export function receive_lists(lists, board){
    return {
        type: 'RECEIVE_LISTS', 
        lists,
        board
    }
}

// Individual Error
export const RECEIVE_LISTS_ERROR = 'RECEIVE_LISTS_ERROR';

export function receive_lists_error(error, board){
    return {
        type: 'RECEIVE_LISTS_ERROR',
        error,
        board
    }
}

// API call thunk

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

export function fetch_list(board){

}