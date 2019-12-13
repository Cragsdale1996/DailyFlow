let nextWorkSessionId = 0;

// ADD
export const ADD_WORK_SESSION    = 'ADD_WORK_SESSION';

export function add_work_session(new_session){
    return { 
        type: ADD_WORK_SESSION,
        id: nextWorkSessionId++, 
        new_session 
    }
}

// REMOVE
export const REMOVE_WORK_SESSION = 'REMOVE_WORK_SESSION';

export function remove_work_session(id){
    return { 
        type: REMOVE_WORK_SESSION, 
        id 
    }
}

// UPDATE
export const UPDATE_WORK_SESSION = 'UPDATE_WORK_SESSION';

export function update_work_session(id, updated_session){
    return {
        type: UPDATE_WORK_SESSION, 
        id, 
        updated_session
    }
}

export const MAP_CARD_TO_SESSION = 'MAP_CARD_TO_SESSION';

export function map_card_to_session(card_id, session_id, start_min, end_min){
    return {
        type: MAP_CARD_TO_SESSION,
        session_id,
        card_id,
        start_min,
        end_min
    }
}