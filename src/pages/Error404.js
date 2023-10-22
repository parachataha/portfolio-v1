import {Link, useNavigate} from 'react-router-dom'
import BlogNav from '../components/blog/BlogNav';
import { Helmet } from 'react-helmet';

const Error404 = () => {

    const navigate = useNavigate();

    return ( 

        <div className="Error404 flex flex-center flex-column">
            <Helmet>
                <title> Page Not Found </title>
                <link rel="canonical" href={`https://tahaparacha.netlify.app/`} />
                <meta name='description' content={`This is awkward... The page you tried to visit doesn't really exist... Go home?`} />

                {/* facebook ones */}
                <meta property="og:type" content={'website'} />
                <meta property="og:title" content={`Page not found - Taha's Portfolio`} />
                <meta property="og:description" content={`This is awkward... The page you tried to visit doesn't really exist... Go home?`} />
                
                {/* twitter ones */}
                <meta name="twitter:creator" content={"Taha Paracha's Portfolio"} />
                <meta name="twitter:title" content={`Page not Found - Taha's Portfolio`} />
                <meta name="twitter:description" content={`This is awkward... The page you tried to visit doesn't really exist... Go home?`} />
            </Helmet>
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