import { Fragment, useState } from "react";
import Todolist from "./Todolist";
import Forms from "./Form";
import { Provider } from "react-redux";
import { store } from "../Redux/state";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navabar";
import NoteForm from "../NoteComponents/NoteForm";
import Notelist from "../NoteComponents/Notelist";
function Mainone(){
    // const[todos,setTodos]=useState([]);
    // function createTodo(text){
    //     setTodos([...todos,{id:todos.length+1,text,completed:false}])  
    // }

    // function toggle(index){
    //     const list=[...todos]
    //     list[index].completed=!list[index].completed;
    //     setTodos(list)
    // }
    return(
        <>
        {/* provider */}
        <Provider store={store}> 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todos" element={
                <Fragment>
                    <Navbar/>
                    <h1 className="heading">Todos</h1>
                    <Forms/>
                    <Todolist/> 
                </Fragment>
            }/>

            <Route path="/notes" element={
                <Fragment>
                    <Navbar/>
                    <h1 className="heading">Notes</h1>
                    <NoteForm/>
                    <Notelist/>
                </Fragment>
            }/>
        </Routes>
        </BrowserRouter>
         </Provider>
        </>
    )
}
export default Mainone;