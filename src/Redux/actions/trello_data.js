// ##### FETCH BOARDS ACTIONS #####

// Request
export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS_REQUEST';

export function fetch_boards_request(){
    return {
        type: 'FETCH_BOARDS_REQUEST'
    }
}

// Success
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';

export function fetch_boards_success(resp){
    return {
        type: 'FETCH_BOARDS_SUCCESS', 
        response: resp
    }
}

// Failure
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';

export function fetch_boards_failure(err){
    return {
        type: 'FETCH_BOARDS_FAILURE',
        error: err
    }
}

// ##### FETCH LISTS ACTIONS #####

// Request
export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST';

export function fetch_lists_request(){
    return {
        type: 'FETCH_LISTS_REQUEST'
    }
}

// Success
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';

export function fetch_lists_success(resp){
    return {
        type: 'FETCH_LISTS_SUCCESS', 
        response: resp
    }
}

// Failure
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE';

export function fetch_lists_failure(err){
    return {
        type: 'FETCH_LISTS_FAILURE',
        error: err
    }
}

// ##### FETCH CARDS ACTIONS #####

// Request
export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';

export function fetch_cards_request(){
    return {
        type: 'FETCH_CARDS_REQUEST'
    }
}

// Success
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';

export function fetch_cards_success(resp){
    return {
        type: 'FETCH_CARDS_SUCCESS', 
        response: resp
    }
}

// Failure
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export function fetch_cards_failure(err){
    return {
        type: 'FETCH_CARDS_FAILURE',
        error: err
    }
}