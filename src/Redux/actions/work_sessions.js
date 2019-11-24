// ## WORK SESSIONS ## //

/*
work_session composition
{
    id:          int,
    name:        string,
    location:    string,
    start:       date,
    end:         date,
    daily_event: {
        title: string, 
        start: date, 
        end: date
    }
*/

// ACTION TYPES
export const ADD_WORK_SESSION    = 'ADD_WORK_SESSION';
export const REMOVE_WORK_SESSION = 'REMOVE_WORK_SESSION';
export const UPDATE_WORK_SESSION = 'UPDATE_WORK_SESSION';

// ACTION CREATORS
let nextWorkSessionId = 0;

export function add_work_session(new_session){
    return { 
        type: ADD_WORK_SESSION,
        id: nextWorkSessionId++, 
        new_session 
    }
}

export function remove_work_session(id){
    return { 
        type: REMOVE_WORK_SESSION, 
        id 
    }
}

export function update_work_session(id, updated_session){
    return {
        type: UPDATE_WORK_SESSION, 
        id, 
        updated_session
    }
}