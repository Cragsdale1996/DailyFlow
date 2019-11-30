import { combineReducers } from 'react-redux';

import api_status from './api_status';
import boards from './boards';
import lists from './lists';
import cards from './cards';

const TrelloData = combineReducers({
    api_status,
    boards,
    lists,
    cards
});

export default TrelloData;

// Boards are fetched first. Then, Lists and Cards are fetched per board.