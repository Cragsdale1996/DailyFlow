export const ALLOW_ALL_BOARDS = 'ALLOW_ALL_BOARDS';

export function allow_all_boards(board_ids){
    return {
        type: ALLOW_ALL_BOARDS,
        board_ids
    };
}

export const TOGGLE_BOARD = 'TOGGLE_BOARD';

export function toggle_board(board_id){
    return {
        type: TOGGLE_BOARD,
        board_id
    };
}