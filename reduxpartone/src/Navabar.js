import { Link } from "react-router-dom";



function Navbar(){
    return(
        <>
        <div className="nav">
            <Link to="/" className="links"><h4>Home</h4></Link> 
            <Link to="/todos" className="links"><h4>TODOS</h4></Link>  
            <Link to="/notes" className="links"><h4>NOTES</h4></Link>

        </div>
        </>
    )
}

export default Navbar;