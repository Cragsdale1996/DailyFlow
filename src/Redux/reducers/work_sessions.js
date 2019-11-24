import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
} from '../actions'

const build_work_session = (raw_session, id) => {
    let session = raw_session;

    let start_date = typeof session.start === 'string' ? new Date(session.start) : session.start
    let end_date = typeof session.end === 'string' ? new Date(session.end) : session.end

    return {
        id:          id,
        name:        session.name,
        location:    session.location,
        start:       start_date,
        end:         end_date,
        daily_event: {
            title: `${session.name}, ${session.location}`,
            start: start_date,
            end:   end_date
        }
    }    
}

const work_sessions = (state = [], action) => {
    switch (action.type) {
        case ADD_WORK_SESSION:
            return [
                ...state,
                build_work_session(action.new_session, action.id)
            ]
        case REMOVE_WORK_SESSION:
            return state.filter(session => session.id !== action.id) 
        case UPDATE_WORK_SESSION:
            return state.map(session => {
                if (session.id !== action.id) return session;
                return build_work_session(action.updated_section, action.id);
            });
        default:
            return state
    }
}

export default work_sessions;