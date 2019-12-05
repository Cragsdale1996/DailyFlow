import { combineReducers } from 'redux';

import fetch_status from './fetch_status';
import boards       from './boards';
import lists        from './lists';
import cards        from './cards';

const TrelloData = combineReducers({
    fetch_status,
    boards,
    lists,
    cards
});

export default TrelloData;