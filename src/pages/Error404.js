import {Link, useNavigate} from 'react-router-dom'
import BlogNav from '../components/blog/BlogNav';

const Error404 = () => {

    const navigate = useNavigate();

    return ( 
        <div className="Error404 flex flex-center flex-column">
            <div className="flex flex-center flex-column">
                <h1>Page not found</h1>
                <p>This is awkward... Let's take you home</p>
                <div className="flex">
                    <Link className='button' onClick={()=>navigate(-1)}>Go Back</Link>
                    <Link className='button' to='/'>Go Home</Link>
                    <Link className='button' to='/blog'>Read Blogs</Link>
                </div>

            </div>
        </div>
     );
}
 
export default Error404;