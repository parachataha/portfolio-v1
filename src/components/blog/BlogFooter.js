import { useEffect, useState } from 'react'
import blogData from '../../data'
import { Link } from 'react-router-dom'

const BlogFooter = () => {

    const [data, setData] = useState([])
    const [aboutMeBlogs, setAboutMeBlogs] = useState([])
    const [educationalBlogs, setEducationalBlogs] = useState([])

    useEffect(()=>{
        setData([...blogData])        
        window.scrollTo(0, 0);
    },[])

    useEffect(()=>{
        const aboutMe = blogData.filter((b) => b.tags.includes('about me'));
        setAboutMeBlogs([...aboutMe]);

        const educational = blogData.filter((b) => !b.tags.includes('about me'));
        setEducationalBlogs([...educational]);
    }, [data, blogData])

    return ( 
        <footer className="BlogFooter">
            <div className="flex">
                {/* <img className='logo' src={logo} alt="logo" /> */}
                {/* <h2>Taha Paracha's Blog</h2> */}
                <br />
            </div>
            <div className="main grid-33">
                <div className="item">
                    <ul>
                        <li> <a className='link' href="/#about">About Me</a> </li>
                        <li> <a className='link' href="/#projects">My Projects</a> </li>
                        <li> <a className='link' href="/#contact">Contact Me</a> </li>
                    </ul>
                </div>

                <div className="item">
                    <ul>
                        {aboutMeBlogs[0] && <li> <Link to={`/blog/post/${aboutMeBlogs[0].id}`}>{aboutMeBlogs[0].title}</Link> </li>}
                        {aboutMeBlogs[1] && <li> <Link to={`/blog/post/${aboutMeBlogs[1].id}`}>{aboutMeBlogs[1].title}</Link> </li>}
                        {aboutMeBlogs[2] && <li> <Link to={`/blog/post/${aboutMeBlogs[2].id}`}>{aboutMeBlogs[2].title}</Link> </li>}
                        {aboutMeBlogs[3] && <li> <Link to={`/blog/post/${aboutMeBlogs[2].id}`}>{aboutMeBlogs[2].title}</Link> </li>}
                    </ul>
                </div>

                <div className="item">
                    <ul>
                        {educationalBlogs[0] && <li> <Link to={`/blog/post/${educationalBlogs[0].id}`}>{educationalBlogs[0].title}</Link> </li>}
                        {educationalBlogs[1] && <li> <Link to={`/blog/post/${educationalBlogs[1].id}`}>{educationalBlogs[1].title}</Link> </li>}
                        {educationalBlogs[2] && <li> <Link to={`/blog/post/${educationalBlogs[2].id}`}>{educationalBlogs[2].title}</Link> </li>}
                    </ul>
                </div>

                </div>
        </footer>
     );
}
 
export default BlogFooter;