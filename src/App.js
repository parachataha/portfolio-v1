import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home'
import Blog from './pages/Blog'
import Error404 from './pages/Error404'
import BlogPost from './pages/BlogPost';
import BlogSearch from './pages/BlogSearch';
import BlogTag from './pages/BlogTag';
import AdminPost from './pages/AdminPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title> Taha Paracha </title>
          <link rel="canonical" href={`%PUBLIC_URL%/`} />
          <meta name='description'  content="Hi! im Taha Paracha, I'm a front-end and back-end developer who designs beautiful websites for clients. Feel free to contact me on my LinkedIn or Discord." />
          <meta name="keywords" content="HTML, CSS, JavaScript, React, SQL, mySQL, Hire, Coder, Design, Graphics, Laptop, Mac, Front-end, back-end, blog, learning, educational, computer science, ICT, CS, Sass, nodeJS, node.js, Taha Paracha, Taha, Paracha, Maths, Problems, Problem solving, Create, Imagine, Discord, LinkedIn, Hire Me, Free, Low cost, freelance"/>
          <meta property="og:image" content={'%PUBLIC_URL%/mainthumb.png'} />

          {/* facebook ones */}
          <meta property="og:type" content='portfolio' />
          <meta property="og:title" content='Your Number One Front-end and back-end Developer - Taha' />
          <meta property="og:description" content="Hi! im Taha Paracha, I'm a front-end and back-end developer who designs beautiful websites for clients. Feel free to contact me on my LinkedIn or Discord."/>
          
          {/* twitter ones */}
          <meta name="twitter:creator" content="@Taha Paracha" />
          <meta name="twitter:card" content='summary_large_image'/>
          <meta name="twitter:title" content='Your Number One Front-end and back-end Developer - Taha' />
          <meta name="twitter:description" content="Hi! im Taha Paracha, I'm a front-end and back-end developer who designs beautiful websites for clients. Feel free to contact me on my LinkedIn or Discord."/>
        </Helmet>

        <a href='https://tahaparacha.vercel.app/' className='outdated-portfolio'> 
          <main className='outdated-portfolio'>
              <p> This portfolio is outdated! Visit my new one <a href='https://tahaparacha.vercel.app/'>here</a>  </p>
          </main>
        </a>

        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/blog' Component={Blog}></Route>
          <Route path='/blog/search/:query' Component={BlogSearch}></Route>
          <Route path='/blog/tag/:query' Component={BlogTag}></Route>
          <Route path='/blog/post/:blogId' Component={BlogPost}></Route>

          <Route path='/admin/post' Component={AdminPost}></Route>
          <Route path='*' Component={Error404}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
