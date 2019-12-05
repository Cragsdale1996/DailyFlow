import { fetch_boards } from './boards';

export * from './boards';
export * from './lists';
export * from './cards';

const key = process.env.REACT_APP_TRELLO_KEY;
const token = process.env.REACT_APP_TRELLO_TOKEN;
const base_url = process.env.REACT_APP_TRELLO_BASE_URL;

// API Call Thunks

export function fetch_trello_data(){
    return function(dispatch, getState){
        // First, fetch boards
        dispatch(fetch_boards())
        .then(() => {

            const boards = getState().trello_data.boards;

            if(boards){
                const boards_ids = Object.keys(boards);
                dispatch(fetch_all_boards_children(boards_ids));
            }

        })
    }
}

export function fetch_all_boards_children(boards_ids){
    return function(dispatch){
        boards_ids.forEach(board_id => {
            dispatch(fetch_board_children(board_id))
        });
    }
}

export function fetch_board_children(board_id){

    let children_url = `${base_url}boards/${board_id}/lists?fields=name,id&cards=open&card_fields=id,name,desc&key=${key}&token=${token}`;
    
    return function(dispatch){
        dispatch(request_children(board_id))
        return fetch(children_url)
            .then(
                response => response.json(),
                error    => dispatch(receive_children_error(error))
            )
            .then(
                json => dispatch(receive_children(json, board_id))
            )
    }
}

export const REQUEST_CHILDREN = 'REQUEST_CHILDREN';

export function request_children(board_id){
    return {
        type: 'REQUEST_CHILDREN',
        board_id
    }
}

export const RECEIVE_CHILDREN = 'RECEIVE_CHILDREN';

export function receive_children(json, board_id){
    return {
        type: 'RECEIVE_CHILDREN',
        json,
        board_id
    }
}

export const RECEIVE_CHILDREN_ERROR = 'RECEIVE_CHILDREN_ERROR'

export function receive_children_error(error, board_id){
    return {
        type: 'RECEIVE_CHILDREN_ERROR',
        error,
        board_id
    }
}