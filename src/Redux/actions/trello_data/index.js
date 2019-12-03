import { fetch_boards } from './boards';
import { fetch_all_cards } from './cards';
import { fetch_all_lists } from './lists';

export * from './boards';
export * from './lists';
export * from './cards';

export function fetch_trello_data(){
    return function(dispatch, getState){
        // First, fetch boards
        dispatch(fetch_boards())
        .then(() => {
            // When boards data present, fetch lists and cards in parallel
            const boards = getState().trello_data.boards.items;
            const boards_ids = Object.keys(boards);

            dispatch(fetch_all_cards(boards_ids));
            dispatch(fetch_all_lists(boards_ids));
        })
    }
}