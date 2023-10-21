import { Link } from "react-router-dom";

const BlogNav = () => {
    return ( 
        <nav className="BlogNav">
            <ul>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="/#about">About</a></li>
                </div>
                <div className="right">
                    <li><a className="bg" href="">Hire Me</a></li>
                </div>
            </ul>
        </nav>
     );
}
 
export default BlogNav;