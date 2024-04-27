import { Link } from "react-router-dom";
import {BsLinkedin, BsDiscord, BsGithub} from 'react-icons/bs'

const Nav = () => {
    return ( 
        <nav>
            <ul>
                <li> <a href="/#">Home</a> </li>
                <li> <a href="/#about">About</a> </li>
                <li> <Link to="/blog">Blog</Link> </li>
            </ul>
            <div className="socials">
                <a href="https://github.com/parachataha" target='_blank'> <BsGithub /> </a>
                <a href="https://www.linkedin.com/in/tahaparacha/" target='_blank'> <BsLinkedin /> </a>
                <a href="https://discord.gg/aYbBrAYQyN" target='_blank'> <BsDiscord /> </a>
            </div>
        </nav>
     );
}
 
export default Nav;