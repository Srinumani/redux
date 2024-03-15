

//Actions
export const ADD_TOdO="addtodos";
export const TOGGLE_TODO="toggle_todo";


//Action creators

export const add_todo=(text)=>({text,type:ADD_TOdO});
export const toggle_todo=(index)=>({index,type:TOGGLE_TODO});