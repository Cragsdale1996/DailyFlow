import { fetch_boards } from './boards';
import { allow_all_boards } from '../config';

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

            // Then, initialize board config and fetch each boards' children (cards and lists)
            const board_ids = Object.keys(getState().trello_data.boards);
            dispatch(allow_all_boards(board_ids));
            Promise.all( dispatch(fetch_all_boards_children(board_ids)) )
            .then(() => {

                // Finally, populate boards with references to children
                dispatch(link_all_children());

            }) 

        })

    }
}

export function fetch_all_boards_children(boards_ids){
    return function(dispatch){

        return boards_ids
            .map(board_id => dispatch(fetch_board_children(board_id)));

    }
}

export function fetch_board_children(board_id){
    return function(dispatch){

        dispatch(request_children(board_id))
        const children_url = `${base_url}boards/${board_id}/lists?fields=name,id&cards=open&card_fields=id,name,desc&key=${key}&token=${token}`;

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

function link_all_children(){
    return function(dispatch, getState){
            
        //boards: {
        //    1: {id: 1, lists: [], cards: []},
        //    2: {id: 2, lists: [], cards: []},
        //    3: {id: 3, lists: [], cards: []},
        //}

        //cards: {
        //    1: { board },
        //    2: { board }
        //}

        //lists: {
        //    1: { board },
        //    2: { board }
        //}

        // init state copies
        const s = getState();
        const cards = s.trello_data.cards;
        const lists = s.trello_data.lists;

        let boards = s.trello_data.boards;

        // assign cards to boards
        Object.keys(cards)
            .forEach(card_id => {
                const board_id = cards[card_id].board; 
                boards[board_id].cards.push(card_id);
            });

        // assign lists to boards
        Object.keys(lists)
            .forEach(list_id => {
                const board_id = lists[list_id].board; 
                boards[board_id].lists.push(list_id);
            });

        // update board states
        Object.keys(boards)
            .forEach(id => dispatch(link_children(id, boards[id].lists, boards[id].cards)))

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

export const LINK_CHILDREN = 'LINK_CHILDREN';

export function link_children(board_id, list_ids, card_ids){
    return {
        type: 'LINK_CHILDREN',
        board_id,
        list_ids,
        card_ids
    }
}