import { combineReducers } from 'react-redux';

import boards from './boards';
import lists from './lists';
import cards from './cards';

const TrelloData = combineReducers({
    boards,
    lists,
    cards
});

export default TrelloData;

// Boards are fetched first. Then, Lists and Cards are fetched per board.