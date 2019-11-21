import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
} from './actions'

function work_sessions(state = [], action) {
    switch (action.type) {
        case ADD_WORK_SESSION:
            let session = action.new_session

            let start_date = typeof session.start === 'string' ? new Date(session.start) : session.start
            let end_date = typeof session.end === 'string' ? new Date(session.end) : session.end

            return [
                ...state,
                {
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
            ]
        case REMOVE_WORK_SESSION:
            return action.filter
        case UPDATE_WORK_SESSION:
            return action.filter
        default:
            return state
    }
}

function daily_events(state = [], action) {
    switch (action.type) {
        case ADD_DAILY_EVENT:
            return [
                ...state,
                {
                text: action.text,
                completed: false
                }
            ]
        case REMOVE_DAILY_EVENT:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case UPDATE_DAILY_EVENT:
            return 
        default:
            return state
    }
}

const WorkFlowApp = combineReducers({
    work_sessions,
    daily_events
})

export default todoApp