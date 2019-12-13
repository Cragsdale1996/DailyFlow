import { combineReducers } from 'redux';

import work_sessions from './work_sessions';
import trello_data from './trello_data';
import categories from './categories';

const WorkFlowApp = combineReducers({
    work_sessions,
    trello_data,
    categories
})

export default WorkFlowApp