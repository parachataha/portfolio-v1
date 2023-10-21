import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

import { FaSearch } from 'react-icons/fa'

import {Helmet} from 'react-helmet'
import blogData from '../data'
import BlogCard from "../components/blog/BlogCard";
import BlogNav from "../components/blog/BlogNav";
import BlogFooter from "../components/blog/BlogFooter";

const BlogSearch = () => {
    const { query } = useParams('');

    const [data, setData] = useState([])

    useEffect(()=>{
        setData([...blogData])    
        
        const blogs = blogData.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase()) || post.keywords?.toLowerCase().includes(query.toLowerCase()) );

        setData([...blogs])

        window.scrollTo(0, 0);
    },[query])
    
    const [search, setSearch] = useState(query)
    const navigate = useNavigate()

    const handleSearch = (e) =>{
        e.preventDefault()
        navigate(`/blog/search/${search}`)
    }

    return ( 
        <div className="Blog BlogSearch">

            <article className="blog-home blog-search">
                <BlogNav/>
                <div className="top">
                    <div className="content">
                        <h1 className="title">Results for "{query}"</h1>
                        <form onSubmit={handleSearch} id='search'>
                            <div className="flex flex-center">
                                <input
                                value={search} onChange={(e)=>{setSearch(e.target.value)}}
                                type="text" placeholder="Search by title, tag or contents" />
                                <button className="button"><FaSearch/></button>
                            </div>
                        </form>
                        <div className="flex">
                            <Link to='/blog/' className="button">Home</Link>
                            <Link onClick={()=>navigate(-1)} className="button">Back</Link>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="blogs grid-25-25">
                        {data.map((b) => {
                            return <BlogCard data={b} />
                        })}
                    </div>
                </section>
            </article>

            <BlogFooter/>

        </div>
    );
}
 
export default BlogSearch;