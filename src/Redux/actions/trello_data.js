// ##### FETCH BOARDS ACTIONS #####

// Request
export const REQUEST_BOARDS = 'REQUEST_BOARDS';

export function request_boards(){
    return {
        type: 'REQUEST_BOARDS'
    }
}

// Success
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';

export function receive_boards(boards){
    return {
        type: 'RECEIVE_BOARDS', 
        boards
    }
}

// Error
export const RECEIVE_BOARDS_ERROR = 'RECEIVE_BOARDS_ERROR';

export function receive_boards_error(error){
    return {
        type: 'RECEIVE_BOARDS_ERROR',
        error
    }
}

// ##### FETCH LISTS ACTIONS (Per Board) #####

// Request
export const REQUEST_LISTS = 'REQUEST_LISTS';

export function request_lists(board){
    return {
        type: 'REQUEST_LISTS',
        board
    }
}

// Success
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export function receive_lists(lists){
    return {
        type: 'RECEIVE_LISTS', 
        lists
    }
}

// Error
export const RECEIVE_LISTS_ERROR = 'RECEIVE_LISTS_ERROR';

export function receive_lists_error(error){
    return {
        type: 'RECEIVE_LISTS_ERROR',
        error
    }
}

// ##### FETCH CARDS ACTIONS (Per Board) #####

// Request
export const REQUEST_CARDS = 'REQUEST_CARDS';

export function request_cards(board){
    return {
        type: 'REQUEST_CARDS',
        board
    }
}

// Success
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_cards(cards){
    return {
        type: 'RECEIVE_CARDS', 
        cards
    }
}

// Error
export const RECEIVE_CARDS_ERROR = 'RECEIVE_CARDS_ERROR';

export function receive_cards_error(error){
    return {
        type: 'RECEIVE_CARDS_ERROR',
        error
    }
}