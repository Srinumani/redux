import { useDispatch, useSelector } from "react-redux";
import { delete_note } from "../Redux/Actions/noteaction";

 
function Notelist(){

    const notes=useSelector((state)=>state.noteReducers.notes);
    const dispacth=useDispatch();
        
    return(
        <>
        <div className="todo-list">
        {notes.map((item, index) => (
          <div key={index} className="todo-item">
                <div className="first-conatiner">
                    <span>{item.createdOn.toLocaleDateString()}</span>
                    <span>{item.text}</span>
                </div>
                <div>
                    
                    <button onClick={()=>dispacth(delete_note(index))} className="button-delete">Delete</button>
                </div>
          </div>
        ))}
    </div>
       
        </>
    )
}
export default Notelist;