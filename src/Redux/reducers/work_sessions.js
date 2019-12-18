import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
    MAP_CARD_TO_SESSION
} from '../actions'

// work_sessions state diagram:
// 
// work_sessions: {
//     id: {
//         id,
//         name,
//         location,
//         start,
//         end,
//         min_duration,
//         remaining_duration,
//         category,
//         mapped_cards: {},
//         daily_event: {
//             title,
//             start,
//             end,
//             color
//         }
//     }
// }

const build_work_session = (session, id) => {
    const start_date = typeof session.start === 'string' ? new Date(session.start) : session.start
    const end_date = typeof session.end === 'string' ? new Date(session.end) : session.end

    const min_duration = (end_date - start_date) / (1000*60);

    return {
        id:                 id,
        name:               session.name,
        location:           session.location,
        category:           session.category.id,
        start:              start_date,
        end:                end_date,
        min_duration:       min_duration,
        remaining_duration: min_duration,
        mapped_cards: {},
        daily_event: {
            title: `${session.name}, ${session.location}`,
            start: start_date,
            end:   end_date,
            color: session.category.color
        }
    };
}

const work_sessions = (state = {}, action) => {
    switch (action.type) {

        case ADD_WORK_SESSION:

            return {
                ...state,
                [action.id]: build_work_session(action.new_session, action.id)
            };

        case REMOVE_WORK_SESSION:

            return Object.keys(state)
                    .reduce((acc, key) => (key !== action.id.toString()) ? 
                        {...acc, [key]: state[key]} :
                        acc
                    , {}); 

        case UPDATE_WORK_SESSION:

            const updated_items = Object.keys(state)
                                    .map(id => (id !== action.id) ? 
                                        state[id]: 
                                        build_work_session(action.updated_section, action.id)
                                    )
                                    
            return {...updated_items};

        case MAP_CARD_TO_SESSION:

            return {
                ...state,
                [action.session_id]: {
                    ...state[action.session_id],
                    mapped_cards: {
                        ...state[action.session_id].mapped_cards,
                        [action.session_id]: {
                            id: action.session_id,
                            start_min: action.start_min,
                            end_min: action.end_min
                        }
                    }
                }
            }

        //case SET_CARD_DURATION
        default:
            return state
    }
}

export default work_sessions;