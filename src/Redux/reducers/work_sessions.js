import {
    ADD_WORK_SESSION,
    REMOVE_WORK_SESSION,
    UPDATE_WORK_SESSION,
} from '../actions'

// work_sessions state diagram:
// 
// work_sessions: {
//     categories: {
//         id: {
//             id,
//             name,
//             color
//         }
//     },
//     items: {
//         id: {
//             id,
//             name,
//             location,
//             start,
//             end,
//             category,
//             daily_event: {
//                 title,
//                 start,
//                 end
//             }
//         }
//     }
// }

const initial_state = {
    categories: {
        1: {
            id: 1,
            name: "Productivity",
            color: "orange"
        },
        2: {
            id: 2,
            name: "Relationships",
            color: "lightblue"
        },
        3: {
            id: 3,
            name: "Interests",
            color: "purple"
        },
        4: {
            id: 4,
            name: "Health",
            color: "green"
        },
        5: {
            id: 5,
            name: "Finances",
            color: "red"
        },
        6: {
            id: 6,
            name: "Career / Profession",
            color: "darkblue"
        },
    },
    items: {}
}

const build_work_session = (session, id) => {
    const start_date = typeof session.start === 'string' ? new Date(session.start) : session.start
    const end_date = typeof session.end === 'string' ? new Date(session.end) : session.end

    let session_obj = {};

    session_obj[id] = {
        id:          id,
        name:        session.name,
        location:    session.location,
        category:    session.category,
        start:       start_date,
        end:         end_date,
        daily_event: {
            title: `${session.name}, ${session.location}`,
            start: start_date,
            end:   end_date
        }
    }    

    return session_obj;
}

const remove_property = (obj, property) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (key !== property) {
        return {...acc, [key]: obj[key]}
      }
      return acc;
    }, {})
  }

const work_sessions = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_WORK_SESSION:
            return {
                ...state,
                items: {
                    ...state.items,
                    ...build_work_session(action.new_session, action.id)
                }
            };
        case REMOVE_WORK_SESSION:
            return {
                ...state,
                items: remove_property(state.items, action.id)
            }
        case UPDATE_WORK_SESSION:
            const updated_items = Object.keys(state.items).map(id => {
                if (id !== action.id) return state.items[id];
                return build_work_session(action.updated_section, action.id);
            })

            return {
                ...state,
                items: {...updated_items}
            }
        default:
            return state
    }
}

export default work_sessions;