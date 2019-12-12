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
        json,
        board_id
    }
}

export const TOGGLE_LIST = 'TOGGLE_LIST';

export function toggle_list(id){
    return {
        type: 'TOGGLE_LIST',
        id
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