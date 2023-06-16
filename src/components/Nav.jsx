import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/services' >Services</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
     );
}
 
export default Nav;