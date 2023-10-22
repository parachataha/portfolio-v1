import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <ul>
                <li> <a href="/#about">About</a> </li>
                <li> <a href="/#contact">Contact</a> </li>
                <li> <Link to="/blog">Blog</Link> </li>
            </ul>
        </nav>
     );
}
 
export default Nav;