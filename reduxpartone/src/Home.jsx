import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="home-container">
            <div className="todo-container">
               <Link to="/todos" className="links"><h4>Todos</h4></Link>  
            </div>
            <div className="todo-container">
            <Link to="/notes" className="links"><h4>Notes</h4></Link>
            </div>
        </div>
        
        </>
    )
}
export default Home;