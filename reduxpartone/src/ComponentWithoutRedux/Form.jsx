import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../Redux/Actions/action";


function Forms(){

    const [todo,setTodo]=useState("");
    const dispatch=useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        // createTodo(todo);
        //dispatch is used to store the todo in actions
        dispatch(add_todo(todo))
        setTodo("");
    }
    return(
        <>
        <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}  
          onChange={(e) => setTodo(e.target.value)}
          className="todo-input"  placeholder="Add Todo Here...." 
           required />
        <button className="add-button">ADD</button>
      </form>
        </>
    )
}

export default Forms;
