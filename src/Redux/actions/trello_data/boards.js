import fetch from 'cross-fetch';

// Request for All Boards
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

// API call thunk

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL

export function fetch_boards(){

    let boards_url = `${base_url}boards?fields=name,url&key=${key}&token=${token}`;

    return function(dispatch){

        dispatch(request_boards());

        return fetch(boards_url)
            .then(
                response => response.json,
                error    => dispatch(receive_boards_error(error))
            )
            .then(
                json => dispatch()
            )
        
    }
}