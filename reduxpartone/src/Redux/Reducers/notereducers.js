import { ADD_NOTE, DELETE_NOTE } from "../Actions/noteaction";

const initialstate={
    notes:[]

}

export function noteReducers(state=initialstate,action){
    switch(action.type){
        case ADD_NOTE:
            return{
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text:action.text,
                        createdOn:new Date()
                    }
                ]
            }
        case DELETE_NOTE:
                state.notes.splice(action.index,1);
                return{
                    ...state,
                    notes:state.notes
                }
        default:
            return state;
                
    }

}