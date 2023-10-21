import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

import { FaSearch } from 'react-icons/fa'

import {Helmet} from 'react-helmet'
import blogData from '../data'
import BlogCard from "../components/blog/BlogCard";
import BlogNav from "../components/blog/BlogNav";
import BlogFooter from "../components/blog/BlogFooter";

const Blog = () => {

    const {blogId} = useParams()

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

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) =>{
        e.preventDefault()
        navigate(`/blog/search/${search}`)
    }

    return ( 
        <div className="Blog">
            <Helmet>
                <title> Taha's Blog </title>
                <link rel="canonical" href={`%PUBLIC_URL%/blog/${blogId}`} />
                <meta name='description' content={data.body} />
                <meta property="og:image" content={data.thumbnail} />

                {/* facebook ones */}
                <meta property="og:type" content={'article'} />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.body} />
                
                {/* twitter ones */}
                <meta name="twitter:creator" content={"Taha Paracha's Blog"} />
                <meta name="twitter:card" content={'summary_large_image'} />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.body} />
            </Helmet>

            <article className="blog-home">
                <BlogNav/>

                <div className="top">
                    <div className="content">
                        <h1 className="title">Welcome to Taha's Blog</h1>
                        <form onSubmit={handleSearch} id='search'>
                            <div className="flex flex-center">
                                <input
                                value={search} onChange={(e)=>{setSearch(e.target.value)}}
                                type="text" placeholder="Search by title, tag or contents" />
                                <button className="button"><FaSearch/></button>
                            </div>
                        </form>
                        <div className="flex">
                            <Link to='/blog/tag/about me' className="button">#about me</Link>
                            <Link to='/blog/tag/coding' className="button">#coding</Link>
                            <Link to='/blog/tag/design' className="button">#design</Link>
                        </div>
                    
                    </div>
                </div>

                <section>

                    <h2>Learn How To Code and Design</h2>
                    <div className="center flex-center flex">
                        <Link to='/blog/tag/coding' className="button">#coding</Link>
                        <Link to='/blog/tag/design' className="button">#design</Link>
                        <Link to='/blog/tag/styles' className="button">#styles</Link>
                    </div>
                    <div className="blogs grid-25-25">
                        {educationalBlogs.map((b)=>{ 
                            return( <BlogCard data={b}/> )})
                        }
                    </div>

                    <h2>Get To Know Me</h2>
                    <div className="blogs grid-25-25">
                          {aboutMeBlogs.map(b=>{
                            return( <BlogCard data={b}/> )})
                        }
                    </div>

                </section>

            </article>
            <BlogFooter/>

        </div>
     );
}
 
export default Blog;