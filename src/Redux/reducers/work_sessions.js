import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
} from '../actions'

const build_work_session = (raw_session) => {
    let session = action.new_session

    let start_date = typeof session.start === 'string' ? new Date(session.start) : session.start
    let end_date = typeof session.end === 'string' ? new Date(session.end) : session.end

    return {
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
                build_work_session(action.new_session)
            ]
        case REMOVE_WORK_SESSION:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        case UPDATE_WORK_SESSION:
            return [
                ...state.slice(0, action.index),
                build_work_session(action.updated_section),
                ...state.slice(action.index+1)
            ]
        default:
            return state
    }
}

export default work_sessions;