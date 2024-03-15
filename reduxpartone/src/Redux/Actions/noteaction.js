//Note Actions

export const ADD_NOTE="add_note";
export const DELETE_NOTE="delete_note";

// Note Action Creators

export const add_note=(text)=>({text,type:ADD_NOTE});
export const delete_note=(index)=>({index,type:DELETE_NOTE});