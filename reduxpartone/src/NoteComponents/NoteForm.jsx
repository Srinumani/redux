import { useState } from "react";

import { useDispatch } from "react-redux";
import { add_note } from "../Redux/Actions/noteaction";
function NoteForm(){
    
    const [note,setNote]=useState("");
    const dispatch=useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        dispatch(add_note(note));
        setNote("");
    }

    return(
        <>
        <div className="note-container"> 
        <form className="form-container" onSubmit={handleSubmit}>
          <div> 
        <textarea 
          type="text-area"
          value={note}
          onChange={(e)=>{setNote(e.target.value)}}
          className="todo-input"  placeholder="Add Note Here...." 
           required> </textarea>
           </div>
        <button className="add-button">ADD Note</button>
      </form>
      </div>
        </>
    )
}
export default NoteForm