import { combineReducers } from 'redux';
import work_sessions from './work_sessions';

export default combineReducers({
    work_sessions
})

//const WorkFlowApp = combineReducers({
//    work_sessions,
//    daily_events
//})
//
//const WorkFlowApp = (state = {}, action) => {
//    return {
//        work_sessions: work_sessions(
//            state.work_sessions,
//            action
//        )
//    }
//}
//
//export default WorkFlowApp