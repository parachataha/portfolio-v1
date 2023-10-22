import { useEffect, useState } from "react";

const AdminPost = () => {

    const [id, setId] = useState('')
    const [title, setTitle] = useState('') 
    const [tags, setTags] = useState('')
    const [keywords, setKeywords] = useState('')
    const [body, setBody] = useState(`<section id='Introduction'> </section>`)

    const [template, setTemplate] = useState(`{ id: "${id}",
title: "${title}",
tags: ${tags},
keywords: "${keywords}",
body: \`${body}\`
}`)

    useEffect(()=>{
setTemplate(`{ id: "${id}",
title: "${title}",
tags: ${tags},
keywords: "${keywords}",
body: \`${body}\`
}`)
    }, [id, title, tags, keywords, body])

    const copyToClipboard = (e) => { 
        e.preventDefault()
        navigator.clipboard.writeText(template)
    }
    

    return ( 
        <div className="AdminPost flex flex-center flex-column">
            <br /> <br />
            <h2>Create a template for a blog</h2>
            <br />

            <form onSubmit={copyToClipboard} className="form-default flex flex-center flex-column">
                <input type="text" value={id} onChange={e=>setId(e.target.value)} placeholder="id" />
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="title" />
                <input type="text" value={tags} onChange={e=>setTags(e.target.value)} placeholder='["tag", "tag", "tag"]'/>
                <input type="text" value={keywords} onChange={e=>setKeywords(e.target.value)} placeholder="keywords"/>

                <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="body" cols="30" rows="10"></textarea>
                <button type='submit' className="button">Copy</button>
            </form>

            <pre className="admin-post-code">
            {template}
            </pre>
        </div>
     );
}
 
export default AdminPost;