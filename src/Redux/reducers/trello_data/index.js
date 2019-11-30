import { combineReducers } from 'redux';

import boards from './boards';
import lists from './lists';
import cards from './cards';

const TrelloData = combineReducers({
    boards,
    lists,
    cards
});

export default TrelloData;