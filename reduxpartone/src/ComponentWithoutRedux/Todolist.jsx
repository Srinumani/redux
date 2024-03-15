import { useDispatch, useSelector } from "react-redux";
import { toggle_todo } from "../Redux/Actions/action";


function Todolist(){
    //useselector hook access the redux state
    const todos=useSelector((state)=>state.todoReducers.todos);
    //dispatch access the redux dispacth function
    const dispatch=useDispatch();

    return(
    <div className="todo-list">
        {todos.map((item, index) => (
          <div key={index} className="todo-item">
                <div className="first-conatiner">
                    <span>{item.id}</span>
                    <span>{item.text}</span>
                </div>
                <div>
                    <input
                    type="checkbox"
                    onClick={() => {dispatch(toggle_todo(index))}}
                    className="todo-checkbox"
                    />
                    <span className={item.completed ? "completed" : "not-completed"}>
                    {item.completed ? "Completed" : "Incomplete"}
                    </span>
                </div>
          </div>
        ))}
    </div>
       
    )
}
export default Todolist;