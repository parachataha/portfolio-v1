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
        
        const blogs = blogData.filter((post) => post.tags.includes(query.toLowerCase()) );

        setData([...blogs])

        window.scrollTo(0, 0);
    },[query])
    
    const [search, setSearch] = useState(query)
    const navigate = useNavigate()

    const handleSearch = (e) =>{
        e.preventDefault()
        navigate(`/blog/tag/${search}`)
    }

    return ( 
        <div className="Blog BlogSearch">
            <Helmet>
                <title> #{query} - Taha's Blog </title>
                <link rel="canonical" href={`https://tahaparacha.netlify.app/blog/tag/${query}/`} />
                <meta name='description' content={`${data.length} results for blogs tagged with #${query} on Taha's blog, all about code, design and problem solving`} />

                {/* facebook ones */}
                <meta property="og:type" content={'article'} />
                <meta property="og:title" content={`Results for #${query} - Taha's Blog`} />
                <meta property="og:description" content={`${data.length} results for blogs tagged with #${query} on Taha's blog, all about code, design and problem solving`} />
                
                {/* twitter ones */}
                <meta name="twitter:creator" content={"Taha Paracha's Blog"} />
                <meta name="twitter:title" content={`Results for #${query} - Taha's Blog`} />
                <meta name="twitter:description" content={`${data.length} results for blogs tagged with #${query} on Taha's blog, all about code, design and problem solving`} />
            </Helmet>

            <article className="blog-home blog-search">
                <BlogNav/>
                <div className="top">
                    <div className="content">
                        <h1 className="title">#{query}</h1>
                        <form onSubmit={handleSearch} id='search'>
                            <div className="flex flex-center">
                                <input
                                value={search} onChange={(e)=>{setSearch(e.target.value)}}
                                type="text" placeholder="Search by tag" />
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