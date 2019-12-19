import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
    MAP_CARD_TO_SESSION,
    REMOVE_CARD_FROM_SESSION,
    TOGGLE_WORK_SESSION
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
//         total_duration,
//         remaining_duration,
//         category,
//         selected,
//         mapped_cards: {
//             [id]: {
//                 id,
//                 duration,
//                 place,
//                 start_min,
//                 end_min
//             }
//         },
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
        total_duration:     min_duration,
        remaining_duration: min_duration,
        selected:           false,
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

        case ADD_WORK_SESSION: {

            return {
                ...state,
                [action.id]: build_work_session(action.new_session, action.id)
            };

        }

        case REMOVE_WORK_SESSION: {

            return Object.keys(state)
                    .reduce((acc, key) => (key !== action.id.toString()) ? 
                        {...acc, [key]: state[key]} :
                        acc
                    , {}); 

        }

        case UPDATE_WORK_SESSION: {

            const updated_items = Object.keys(state)
                                    .map(id => (id !== action.id) ? 
                                        state[id]: 
                                        build_work_session(action.updated_section, action.id)
                                    )
                                    
            return {...updated_items};
        
        }

        case TOGGLE_WORK_SESSION: {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    selected: !state[action.id].selected
                }
            }
        }

        case MAP_CARD_TO_SESSION: {

            let mapped_cards = state[action.session_id].mapped_cards;

            // auto assign place based on highest existing place (# of mapped cards)
            // will be used to determine the order cards are displayed in

            const place = mapped_cards.length + 1;

            // determine start and end based on duration, place and total_duration

            let start_min;
            
            if (place === 1) start_min = 0;
            else {
                const prev_card = Object.keys(mapped_cards).find(id => mapped_cards[id].place === place-1);
                start_min = prev_card.end_min;
            }

            const end_min = start_min + action.duration;

            return {
                ...state,
                [action.session_id]: {
                    ...state[action.session_id],
                    remaining_duration: state[action.session_id].remaining_duration - action.duration,
                    mapped_cards: {
                        ...mapped_cards,
                        [action.session_id]: {
                            id: action.session_id,
                            duration: action.duration,
                            place: place,
                            start_min: start_min,
                            end_min: end_min
                        }
                    }
                }
            }

        }

        case REMOVE_CARD_FROM_SESSION: {

            let mapped_cards = state[action.session_id].mapped_cards;

            return {
                ...state,
                [action.session_id]: {
                    ...state[action.session_id],
                    remaining_duration: state[action.session_id].remaining_duration + mapped_cards[action.card_id].duration,
                    mapped_cards: Object.keys(mapped_cards)
                                    .reduce((acc, id) => (id !== action.card_id.toString()) ? 
                                        {...acc, [id]: mapped_cards[id]} :
                                        acc
                                    , {})
                }
            }
        
        }

        //case SET_CARD_DURATION
        default: {

            return state
        
        }
    }
}

export default work_sessions;