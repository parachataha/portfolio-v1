import logo from '../images/logo.png'

import {BsLinkedin, BsDiscord} from 'react-icons/bs'

const Footer = () => {
    return ( 
        <footer className="Footer">
            <div className="main grid">

                <div className="item">
                    <img className='logo' src={logo} alt="logo" />
                    <p>Connect with me via Discord or LinkedIn. My Discord handle is @tahabaha. However I only accept message requests. Not friend requests.</p>
                    <div className="flex socials">
                        <a href="https://www.linkedin.com/in/tahaparacha/" target='_blank'> <BsLinkedin></BsLinkedin> </a>
                        <a href="https://discord.gg/aYbBrAYQyN" target='_blank'> <BsDiscord></BsDiscord> </a>
                    </div>
                </div>
                
                <div className="links">

                    <h3>Navigate</h3>
                    <ul>
                        <li> <a className='link' href="/#about">About</a> </li>
                        <li> <a className='link' href="/#projects">Projects</a> </li>
                        <li> <a className='link' href="/#contact">Contact</a> </li>
                    </ul>

                </div>

            </div>
        </footer>
     );
}
 
export default Footer;