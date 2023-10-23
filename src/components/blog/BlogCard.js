import { Link } from "react-router-dom";

const BlogCard = (props) => {
    
    const {data} = props;
    return ( 
        <Link to={`/blog/post/${data.id}`} key={data.id} className="blog-card">
            <div className="wrapper">
                <img src={data.thumbnail} alt="" />
            </div>

            <div className="tags flex">
                {data.tags[0] && <Link className="button" to={`/blog/tag/${data.tags[0]}`}>#{data.tags[0].toLowerCase()}</Link>}
                {data.tags[1] && <Link className="button" to={`/blog/tag/${data.tags[1]}`}>#{data.tags[1].toLowerCase()}</Link>}
            </div>

            <h3>{data.title}</h3>
        </Link>
     );
}
 
export default BlogCard;