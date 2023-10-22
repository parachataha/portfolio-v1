import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

import defaultThumbnail from '../images/default-thumbnail.png'

import {Helmet} from 'react-helmet'
import blogData from '../data'

import {FaUserAlt, FaArrowRight} from 'react-icons/fa'
import BlogFooter from "../components/blog/BlogFooter";
import BlogNav from "../components/blog/BlogNav";

const BlogPost = () => {
    const {blogId} = useParams()

    const [data, setData] = useState({
        title: 'Coding and Design Blogs',
        thumbnail: 'certificatesThumb',
        body: `<section id='loading blog'>Hey, welcome to my blog! Here I teach people how to code, design and problem solve.</section>`,
        tags: ['loading'],
    })

    const navigate = useNavigate()

    const [sections, setSections] = useState([])


    useEffect(() => {
        
        const post = blogData.filter((post) => post.id == blogId);

        if (post[0]) {
            setData({...post[0]})
        } else {
            navigate('/not-found')
        }
        
        window.scrollTo(0, 0);


    },[])

    useEffect(() => {
        const extractSections = (html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          return Array.from(doc.querySelectorAll('section'));
        };
    
        const extractedSections = extractSections(data.body);
        setSections(extractedSections);
        console.log(sections)
      }, [data.body, blogId, blogData]);
    

    return ( 
        <div className="Blog">
            <Helmet>
                <title> {data.title} - Taha's Blog </title>
                <link rel="canonical" href={`https://tahaparacha.netlify.app/blog/${blogId}/`} />
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
        
            <article>
                <BlogNav/>

                <div className="top">
                    <div className="content">
                        <h1 className="title">{data.title}</h1>
                        <p className="tags">
                            {data?.tags[0] && <Link className="button" to={`/blog/tag/${data.tags[0]}`}>#{data.tags[0]}</Link>} 
                            {data?.tags[1] && <Link className="button" to={`/blog/tag/${data.tags[1]}`}>#{data.tags[1]}</Link>}
                            {data?.tags[2] && <Link className="button" to={`/blog/tag/${data.tags[2]}`}>#{data.tags[2]}</Link>}
                            {data?.tags[3] && <Link className="button" to={`/blog/tag/${data.tags[3]}`}>#{data.tags[3]}</Link>}
                            {data?.tags[4] && <Link className="button" to={`/blog/tag/${data.tags[4]}`}>#{data.tags[4]}</Link>}
                            {data?.tags[5] && <Link className="button" to={`/blog/tag/${data.tags[5]}`}>#{data.tags[5]}</Link>}
                        </p>
                        <div className="thumb-wrapper">
                            <img className="thumbnail" src={data.thumbnail}></img>
                        </div>
                        <p className="author">
                            <FaUserAlt/> {data?.author || ' Taha Paracha'}
                        </p>
                    </div>

                </div>
                <div className="main">

                    <div className="body">
                    <span dangerouslySetInnerHTML={

                        {__html: `${data.body
                            .replaceAll('+', '<br/>')
                            // .replace(/(\r\n|\n|\r){2,}/g, '<br>')
                            .replaceAll('<terminal>', "<div class='terminal'>")
                            .replaceAll('</terminal>', "</div>")

                            .replaceAll('<grey>', "<span class='code-grey'>")
                            .replaceAll('</grey>', "</span>")

                            .replaceAll('<red>', "<span class='code-red'>")
                            .replaceAll('</red>', "</span>")

                            .replaceAll('<yellow>', "<span class='code-yellow'>")
                            .replaceAll('</yellow>', "</span>")

                            .replaceAll('<green>', "<span class='code-green'>")
                            .replaceAll('</green>', "</span>")

                            .replaceAll('<r>', "<span class='code-red'>")
                            .replaceAll('</r>', "</span>")
                            .replaceAll('<y>', "<span class='code-yellow'>")
                            .replaceAll('</y>', "</span>")
                            .replaceAll('<g>', "<span class='code-green'>")
                            .replaceAll('</g>', "</span>")
                            .replaceAll('<g>', "<span class='code-grey'>")
                            .replaceAll('</g>', "</span>")

                            .replaceAll('<codeblock>', "<div class='code-block'>")
                            .replaceAll('</codeblock>', "</div>")}

                            <p class='grey large'> // Sharing and feedback is always appreciated </p>
                            `
                        }}>
                        </span>
                        <div className="width-100 hire-me card card-yellow">
                            <h2>Looking for an inspiring website?</h2>
                            <p>Contact me today for a suitable price. Learn more now</p>
                            <Link to='/'><FaArrowRight className='arrow-big'/></Link>
                        </div>
                        <br /> <br /> <br />
                    </div>

                    <div className="side">
                        <div className="contents card">
                            <h2>{sections.length>=1 ? ('Contents'):('No Contents Available')}</h2>
                            <ol>
                                {sections.map(s=>{
                                    return (  
                                        <li className="section">
                                            <a href={`/blog/post/${blogId}#${s.id}`}>{s.id?.replaceAll('_', ' ').replaceAll('-', ' ')}</a>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                        <br />
                        <div className="hire-me card card-yellow">
                            <h2>Looking for an inspiring website?</h2>
                            <p>Contact me today for a suitable price. Learn more now</p>
                            <Link to='/'><FaArrowRight className='arrow-big'/></Link>
                        </div>
                    </div>


                </div>

            </article>

            <BlogFooter/> 
            
        </div>
     );
}
 
export default BlogPost;
