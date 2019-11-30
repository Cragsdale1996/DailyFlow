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

// ##### FETCH LISTS ACTIONS #####

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

// ##### FETCH CARDS ACTIONS #####

// Request for All Cards
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS';

export function request_all_cards(boards){
    return {
        type: 'REQUEST_ALL_CARDS',
        boards
    }
}

// Individual Success
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_cards(cards, board){
    return {
        type: 'RECEIVE_CARDS', 
        cards,
        board
    }
}

// Individual Error
export const RECEIVE_CARDS_ERROR = 'RECEIVE_CARDS_ERROR';

export function receive_cards_error(error, board){
    return {
        type: 'RECEIVE_CARDS_ERROR',
        error,
        board
    }
}