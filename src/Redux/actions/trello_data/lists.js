import fetch from 'cross-fetch';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// API call thunks

export function fetch_all_lists(boards_ids){
    return function(dispatch){
        boards_ids.forEach(board_id => {
            dispatch(fetch_lists(board_id));
        })
    }
}

export function fetch_lists(board_id){

    let lists_url = `${base_url}boards/${board_id}/fields=name,url&key=${key}&token=${token}`;

    return function(dispatch){

        dispatch(request_lists());

        return fetch(lists_url)
            .then(
                response => response.json(),
                error    => dispatch( receive_lists_error(error) )
            )
            .then(
                json => dispatch(receive_lists(json, board_id))
            )
        
    }

}

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