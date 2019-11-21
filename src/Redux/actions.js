// ## WORK SESSIONS ## //

// ACTION TYPES
export const ADD_WORK_SESSION    = 'ADD_WORK_SESSION';
export const REMOVE_WORK_SESSION = 'REMOVE_WORK_SESSION';
export const UPDATE_WORK_SESSION = 'UPDATE_WORK_SESSION';

// ACTION CREATORS
export function add_work_session(work_session){
    return { 
        type: ADD_WORK_SESSION, 
        session 
    }
}

export function remove_work_session(index){
    return { 
        type: REMOVE_WORK_SESSION, 
        index 
    }
}

export function update_work_session(index, new_vals){
    return {
        type: UDPATE_WORK_SESSION, 
        index, 
        new_vals 
    }
}