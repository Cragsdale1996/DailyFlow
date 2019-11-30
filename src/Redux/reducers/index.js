import { combineReducers } from 'redux';
import work_sessions from './work_sessions';
import trello_data from './trello_data';

//export default combineReducers({
//    work_sessions
//})

const WorkFlowApp = combineReducers({
    work_sessions,
    trello_data
})

//const WorkFlowApp = (state = {}, action) => {
//    return {
//        work_sessions: work_sessions(
//            state.work_sessions,
//            action
//        )
//    }
//}

export default WorkFlowApp