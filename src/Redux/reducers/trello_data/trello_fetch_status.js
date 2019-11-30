import { 
    REQUEST_BOARDS, RECEIVE_BOARDS, RECEIVE_BOARDS_ERROR,
    REQUEST_ALL_LISTS, RECEIVE_LISTS, RECEIVE_LISTS_ERROR, 
    REQUEST_ALL_CARDS, RECEIVE_CARDS, RECEIVE_CARDS_ERROR
} from '../../actions/trello_data'; 

const trello_fetch_status = (
    state = {
        boards_pending: false, 
        boards_fetch_success: false,
        lists_per_boards: {
            boards_pending: [],
            boards_errors: []
        },
        cards_per_boards: {
            boards_pending: [],
            boards_errors: []
        }
    },
    action
) => {
    switch(action.type){
        case REQUEST_BOARDS:
            return {
                ...state,
                boards_pending: true
            }
        case RECEIVE_BOARDS:
            return {
                ...state,
                boards_pending: false,
                boards_fetch_success: true
            }
        case RECEIVE_BOARDS_ERROR:
            return {
                ...state,
                boards_pending: false,
                boards_fetch_success: false
            }
        case REQUEST_ALL_LISTS:
            return {
                ...state,
                lists_per_boards: {
                    ...state.lists_per_boards,
                    boards_pending: action.boards
                }
            }
        case RECEIVE_LISTS:
            return {
                ...state,
                lists_per_boards: {
                    ...state.lists_per_boards,
                    boards_pending: state.lists_per_boards.boards_pending.filter(item => item !== action.board)
                }
            }
        case RECEIVE_LISTS_ERROR:
            return {
                ...state,
                lists_per_boards: {
                    boards_pending: state.lists_per_boards.boards_pending.filter(item => item !== action.board),
                    boards_errors: state.lists_per_boards.boards_errors.concat(action.board)
                }
            }
        case REQUEST_ALL_CARDS:
            return {
                ...state,
                cards_per_boards: {
                    ...state.cards_per_boards,
                    boards_pending: action.boards
                }
            }
        case RECEIVE_CARDS:
            return {
                ...state,
                cards_per_boards: {
                    ...state.cards_per_boards,
                    boards_pending: state.cards_per_boards.boards_pending.filter(item => item !== action.board)
                }
            }
        case RECEIVE_LISTS_CARDS:
            return {
                ...state,
                cards_per_boards: {
                    boards_pending: state.cards_per_boards.boards_pending.filter(item => item !== action.board),
                    boards_errors: state.cards_per_boards.boards_errors.concat(action.board)
                }
            }
        default:
            return state;
    }       
}