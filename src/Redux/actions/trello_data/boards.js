import fetch from 'cross-fetch';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// API call thunk

export function fetch_boards(){

    const boards_url = `${base_url}boards?fields=name,url&key=${key}&token=${token}`;
    
    return function(dispatch){

        dispatch(request_boards());

        return fetch(boards_url)
            .then(
                response => response.json(),
                error    => dispatch( receive_boards_error(error) )
            )
            .then(
                json => dispatch( receive_boards(json) )
            )
    }
}

// Request for All Boards
export const REQUEST_BOARDS = 'REQUEST_BOARDS';

export function request_boards(){
    return {
        type: 'REQUEST_BOARDS'
    }
}

// Success
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';

export function receive_boards(json){

    console.log(json);

    let boards_obj = {};
    
    json.forEach(board => {
        boards_obj[board.id] = {
            id: board.id,
            name: board.name
        }
    })

    return {
        type: 'RECEIVE_BOARDS', 
        boards: boards_obj
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