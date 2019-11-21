// ## WORK SESSIONS ## //

/*
work_session composition
{
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
export function add_work_session(new_session){
    return { 
        type: ADD_WORK_SESSION, 
        new_session 
    }
}

export function remove_work_session(index){
    return { 
        type: REMOVE_WORK_SESSION, 
        index 
    }
}

export function update_work_session(index, updated_session){
    return {
        type: UDPATE_WORK_SESSION, 
        index, 
        updated_session
    }
}