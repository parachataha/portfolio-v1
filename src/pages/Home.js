import { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';

import Nav from '../components/Nav';

import {AiOutlineDown} from 'react-icons/ai'
import {FaLinkedin, FaDiscord} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'

import phoneEmoji from '../images/vector/mobile_phone_3d.png'

import copy from "copy-to-clipboard";
import Footer from '../components/Footer';

const Home = () => {

    const navigate = useNavigate()
    const [projectsTab, setProjectsTab] = useState(1)
    const [tabsClicked, setTabsClicked] = useState(0)
 
    const copyDiscord = () => { copy('tahabaha'); }
    const copyLinkedin = () => { copy('https://www.linkedin.com/in/tahaparacha/'); window.open('https://www.linkedin.com/in/tahaparacha/', '_blank') }

    useEffect(() => {
        window.addEventListener("scroll", reveal);
    }, [])


    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
        var reveals = document.querySelectorAll(".widget");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
      
      

    return ( 
        <div className="Home">
            <header className="header">
            <Nav></Nav>
                <div className="content">
                    <h1>Let’s Build Your Dream Application</h1>
                    <h3 className='grey'>👋 Hey, I'm Taha</h3>
                </div>
                <div className="center-container">
                    <AiOutlineDown className='center'></AiOutlineDown>
                </div>
            </header>
            <section id="about">
                <h2 className='reveal center'>Check out my blog</h2>
                <p className="reveal center about-text"> I've created a blog to <b>help others</b> learn how to code, design and problem solve. As a <b>self-taught</b> coder and designer, it was incredibly hard to keep swapping between methods and tutorials with different techniques, so I took the time to see <b>what made me struggle</b> and to create a blog that solves common <b>beginner and advanced</b> problems, making sure I explain each step of the way.</p>
                <a href="/blog" className="center button reveal">Learn Now</a>
            </section>
            <section id="about">
                <ul className='languages reveal'>
                    <li> <a>HTML</a> </li>
                    <li> <a>CSS</a> </li>
                    <li> <a>Javascript</a> </li>
                    <li> <a>SASS</a> </li>
                    <li> <a>ReactJS</a> </li>
                    <li> <a>SQL</a> </li>
                    <li> <a>Firebase</a> </li>
                    <li> <a>Figma</a> </li>
                </ul>
                <h2 className='reveal'>What I Do</h2>

                <p className='center about-text reveal'>Hey, my name is <span className='bold'>Taha Paracha</span> and I am a Year 10 Student inspired by the endless boundaries coding unlocks. I create websites for clients and for my own projects that inspires its users. Each website is custom made in Figma and then given life in <span className='bold'>React</span>, SASS and JavaScript. I use backend services like <span className='bold'>Firebase and mySQL</span> to authenticate users and supply a <span className='bold'>secure backend</span> for the application.</p>

                <div className="center center-container grid ">
                    <div className="item reveal">
                        <h3>Coding</h3>
                        <p> I combine beautiful design with complex backend services to bring your dream website alive. </p>
                        <a href="/blog/post/how-i-code" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                    </div>
                    <div className="item reveal">
                        <h3>Design</h3>
                        <p> I use Figma to create stunning banners and vector images to add a little extra to your business. </p>
                        <a href="/blog/post/how-i-design" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                    </div>
                </div>

                <br />
                <div className="flex">
                    <Link to="" className="button reveal">Learn How</Link>
                    <Link to="/blog/post/certificates" className="button reveal">See Certifications</Link>
                </div>

            </section>
            <section id="projects">
                <h2 className='reveal'> Check Out My Previous Projects </h2>

                <div className="tabs reveal">
                    <ul>
                        <li className={projectsTab == 1 ? ('tab active') : ('tab')} onClick={() => {setTabsClicked(1); setProjectsTab(1)}}> Coding </li>
                        <li className={projectsTab == 2 ? ('tab active') : ('tab')} onClick={() => {setTabsClicked(1); setProjectsTab(2)}}> Design </li>
                    </ul>
                </div>

                {projectsTab === 1 && <div className="coding-projects">
                    <div className={tabsClicked ? ('stats') : ('stats')}>
                        <div className="item work">
                            <div className="data">100+</div>
                            <h3>Total Websites*</h3>
                        </div>
                        <div className="item clients">
                            <div className="data">5+</div>
                            <h3>Clients Served</h3>
                        </div>
                        <div className="item happy">
                            <div className="data">100%</div>
                            <h3>Satisfaction Rate</h3>
                        </div>
                        <div className="item data">
                            <div className="data">0</div>
                            <h3>Excluded Data</h3>
                        </div>
                        <br />
                        
                    </div>
                    <div className="widget project">
                        <div className="badges">
                            <div className="badge badge-red">new</div>
                            <div className="badge badge-blue">this site!</div>
                        </div>
                        <div className="grid">
                            <div className="main">
                                <h3>My Portfolio & Blog</h3>
                                <a href="" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                            </div>
                            <div className="info">
                                <p>I designed this website with React, SASS and figma. I used modern website design in which I designed in Figma</p>
                                <a href="" className="link link-main">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="widget project">
                        <div className="badges">
                            <div className="badge badge-red">new</div>
                            <div className="badge badge-blue">client site</div>
                        </div>
                        <div className="grid">
                            <div className="main">
                                <h3>Bonk Dashboard</h3>
                                <a href="" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                            </div>
                            <div className="info">
                                <p>Bonk is a dashboard I designed for the company <a className='link link-main' href='https://github.com/voidnix' target='_blank'>Voidnix LLP.</a></p>
                                <a href="" className="link link-main">See Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="widget project">
                        <div className="badges">
                            <div className="badge badge-red">new</div>
                            <div className="badge badge-blue">client site</div>
                        </div>
                        <div className="grid">
                            <div className="main">
                                <h3>SoCal Politics</h3>
                                <a href="" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                            </div>
                            <div className="info">
                                <p>I designed the front end and backend of this site. Using a secure mySQL database and using cPanel to manage and upload data</p>
                                <a href="" className="link link-main">See Details</a>
                            </div>
                        </div>
                    </div>  
                </div>}
                {projectsTab === 2 && <div className='design-projects'>

                <div className={tabsClicked ? ('stats') : ('stats')}>
                        <div className="item clients">
                            <div className="data">3+</div>
                            <h3>Clients Served</h3>
                        </div>
                        <div className="item happy">
                            <div className="data">100%</div>
                            <h3>Satisfaction Rate</h3>
                        </div>
                        <div className="item data">
                            <div className="data">0</div>
                            <h3>Excluded Data</h3>
                        </div>
                        <br />                        
                    </div>

                    <div className="widget project">
                        <div className="badges">
                            {/* <div className="badge badge-red">  </div> */}
                            <div className="badge badge-blue">clients work</div>
                        </div>
                        <div className="grid">
                            <div className="main">
                                <h3>Discortics Information Banners</h3>
                                <a href="" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                            </div>
                            <div className="info">
                                <p>These banners were created for the Discortics Information Page. Created in Figma with love and care.</p>
                                <a href="" className="link link-main">See Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="widget project">
                        <div className="badges">
                            <div className="badge badge-red"> new </div>
                            <div className="badge badge-blue">clients work</div>
                        </div>
                        <div className="grid">
                            <div className="main">
                                <h3>Saturn Product Previews</h3>
                                <a href="" className="arrow"> <BsArrowRight></BsArrowRight> </a>
                            </div>
                            <div className="info">
                                <p>These vectors were created for Saturn's homepage to showcase the applications uses.</p>
                                <a href="" className="link link-main">See Details</a>
                            </div>
                        </div>
                    </div>
                    
                </div>}

            </section>
            <div id="contact">
                <section id="contact">
                    <h2 className='large reveal'>Let's Change The World Together</h2>
                    <div className="contact-discord reveal">
                        <div className="flex">
                            <div className="content">
                                <h3>Contact Me <br /><span className='gradient-purple'>Via Discord</span></h3>
                                <p className='minimalish'>Connect with me via Discord. Join <span className='bold'>my server</span> and send me a <span className='bold'>message request</span>. I respond within 1-2 business days</p>
                                <br />
                                <a href='https://discord.gg/aYbBrAYQyN' target='_blank' className="button-rounded"> Join Discord </a>
                            </div>
                            <div className="graphics"> </div>
                        </div>
                    </div>

                    <div className="contact-linkedin reveal">
                        <div className="flex">
                            <div className="content">
                                <h3>Connect With Me <br /><span className='gradient-blue'>On LinkedIn</span></h3>
                                <p className='minimalish'>Connect with me by sending a <span className='bold'>connection request</span> on my LinkedIn. I respond within 1-5 business days. </p>
                                <br />
                                <a href='https://www.linkedin.com/in/tahaparacha/' target='_blank' className="button-rounded"> Visit Profile </a>
                            </div>
                            <div className="graphics"> </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Home;
