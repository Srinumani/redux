import { ADD_TOdO, TOGGLE_TODO } from "../Actions/action";

 
const initialstate={
    todos:[
        {text:"welcome to gym",completed:false},
        {text:"welcome to school",completed:true}

    ]
}

export default function todoReducers(state=initialstate,action){
    
     switch(action.type){
        case  ADD_TOdO:
            return{
                ...state,
                    todos:[
                        ...state.todos,
                        {
                            text:action.text,
                            completed:false
                        }
                    ]
            }

        case  TOGGLE_TODO:
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i==action.index){
                        todo.completed=!todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
     }

}