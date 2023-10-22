import certificatesThumb from './images/blog-images/certifications.png'
import codingTechStackThumb from './images/blog-images/coding-tech-stack.png'
import howICodeThumb from './images/blog-images/how-I-code.png'
import whatIsThumb from './images/blog-images/what-is-sass.png'
import howIDesignThumb from './images/blog-images/how-I-design.png'

import extensionsTab from './images/blog-images/assets/extensions-tab.png'
import extensionSearchSassCompiler from './images/blog-images/assets/extension-search-live-sass.png'
import extensionSassCompiler from './images/blog-images/assets/extension-live-sass.png'
import extensionSettings from './images/blog-images/assets/extension-settings.png'
import sassNewFile from './images/blog-images/assets/sass-new-file.png'
import sassCompilerSettings from './images/blog-images/assets/sass-compiler-settings.png'

const blogData = [
    { id: 'how-i-code',
        title: 'The Basics on How I Code',
        tags: ['about me', 'coding'],
        thumbnail: howICodeThumb,
        body: ` Hey, I'm Taha and this blog post is all about how I create websites for my own personal projects and for clients. 
        ++
        It all starts with a simple idea, then starts the design phase. Click <a href='/blog/post/how-i-design'> here </a> to learn about my design phase. <b>But, let's get into the nitty gritty:</b>
        ++
        I mainly code my sites using  React, SASS, CSS, NodeJS and a database of my choosing. Sometimes its firebase, sometimes its mySQL.
        ++
        My code often starts with me bootstrapping a new ReactJS code folder with all the dependencies already installed. I do this easily by running 
        <terminal> npx <yellow>create-react-app</yellow> <grey>./</grey> </terminal>
        This then creates 2 main folders in my directory, one <code>/public</code> and one <code>/src</code>. The <code>/public</code> folder contains the area where React will inject code into. It simply has the favicon, <code>index.html</code> and some extra files.
        ++
        The <code>/src</code> folder has all the React code that will be injected. It generates with a boiler plate in <code>index.js</code> and <code>App.js</code>. However this blog post is not about what React is and how to use it. So I won't go into full detail.
        <h3>React Router Dom</h3>
        I then install React-Router-Dom with
        <terminal>npm <grey>i</grey> <yellow>react-router-dom</yellow></terminal> <i> the letter "i" is short for install. </i>
        ++
        I then use <code>BrowserRouter, Routes and Route</code> to create pages for the app that can easily communicate with each other. In fact, this website itself uses it!
        <h3>SASS and CSS</h3>
        I use Visual Studio's extension <a href='https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass' target='_blank'> Live Sass Compiler </a> to compile my SASS files into browser-readable CSS. For those who don't know the differences between SASS/ SCSS and CSS, I have a blog post <a href='/blog/post/what-is-sass' target='_blank'> here</a>.
        <h3> Databases </h3>
        As stated before, I use either Firebase's Firestore or mySQL to supply a backend to my websites. With Firestore, I can easily set up firewalls with the built-in security rules feature. However with mySQL it is much harder to secure the database. However each option their pros and cons. 
        ++
        Thus, generally, my applications uses that <a href='/blog/post/
        tech-stack'> tech stack </a> to bring them to life. The combination of React's single page system, Firebase, mySQL and nodeJS. I hope this helps you and I hope you have a great rest of your day!` 
    },
    { id: 'how-i-design',
        title: 'The Basics of Design and How I Started',
        tags: ['about me', 'design'],
        thumbnail: howIDesignThumb,
        keywords: 'design styles about me taha paracha figma ',
        body: `
            <section id='introduction'>
                Designing anything is a tedious process, and it can be hard to get started. But, with the right tools and mindset, you can create anything you want. However, the process is long and can be demotivating, which is why im creating this blog post to help you get started.
            </section>
            <section id='your_first_step's>
                <h3>Your First Step</h3>
                The step in designing your dream app is to think through what you want your end result to look like. First <b>search for cool designs online similar to your project</b>; Look at their layouts, look at their components; colour themes etc. 
                ++
                Then you need to think about colour schemes. A common mistake that every designer makes, including me, is getting stuck on colour choices. But there are some helpful tips and tricks to help you get started.
            </section>
            <section id='colours'>
                <h3>Colours</h3>
                First, you need to choose your <b>base background</b>. Will it be white, black, beige or a funky colour. You can always have extra themes, like the common dark theme and light themes, but choose your first themes background colour. 
                <img class='small' src='https://i.imgur.com/qNj4TAo.png' alt='different background images'>
                +
                Then, with your chosen colour, choose a primary colour that contrasts with your background. For example, if your background is white, choose a dark colour. If your background is black, choose a light colour.
                <i>not always the case*</i>
                +
                <img class='small' src='https://i.imgur.com/yoWQzEV.png' alt='contrasting colours'>
                +
                Now, onto choosing your next step. You can either choose a secondary colour, or a tertiary colour. A secondary colour is a colour that compliments your primary colour. A tertiary colour is a colour that compliments your secondary colour.
                ++
                It is important to note that you should only have 3-4 colours in your colour scheme. Any more and it will look messy and unorganized.
                ++
                You can use the colour wheel to choose these colours. Colours opposite, contrast.
                + You can find a good colour wheel on <a href='https://color.adobe.com/create/color-wheel' target='_blank'>Adobe's website</a>.

            </section>
        `
    },
    { id: 'tech-stacks',
        title: 'Tech Stacks: The Secrets Behind Coding a New Project',
        tags: ['coding'],
        thumbnail: codingTechStackThumb,
        body: ` 
        <section id='introduction'>
        Every coder is different, they use different tech stacks, languages, resources and more. And  that is a great thing. It means that every piece of code is tailored by the coder. Adding character and uniqueness to the application.  But sometimes, when learning, it can be a bit tricky to understand how to fix an issue and make sure the solution applies to your code as well. Which is why I am creating this blog to help iron out any coding queries of any type.
        <h3> Tech Stacks </h3> 
        Each coder and project has their own "tech stack". And for those who don't understand what that means, it's a fancy word for just what languages/frameworks a coder users. 
        </section>
        <section id='common_tech_stacks'>
        Tech stacks can be identified with abbreviations. These are just the first letters of the language/framework/software that's included in the stack. 
        ++
        <h3>Some common stacks</h3>
        <ul> <li> MEAN: <b>M</b>ongoDB, <b>E</b>xpressJS, <b>A</b>ngularJS, < b>N</b>ode.JS </li> <li> LAMP: <b>L</b>inux, <b>A</b>pache, <b>M</b>ySQL, <b>P</b>HP </li><li> MERN: <b>M</b>ongoDB, <b>E</b>xpressJS, <b>R</b>eact, <b>N</b>ode.JS </li>
        </ul> And the list can continue forever, <b> But... </b>
        <b> The most important thing you need to know </b> is that you can create any tech stack you want. You can make a whole new one up just for your desired app. 
        ++
        Because in reality, tech stacks are generally organized in 3 categories. <ul> <li> Front-end </li>   <li> Back-end </li>   <li> Database </li>  </ul>
        So basically tech stacks are just the languages/frameworks/softwares used in a application. <b> Here is a list of common examples of each tech stack category. </b> You can pick them out and use as many as you like for your dream project.
        </section>
        <section id='create_your_own_stack'>
        <h3> Examples </h3>
        <table> 
            <tr> <th> Front-end </th> <th> Back-end </th> <th> Database </th> </tr>
            <tr> <td> HTML </td> <td> Node.JS </td> <td> mySQL </td> </tr>
            <tr> <td> CSS </td> <td> PHP </td> <td> PostgreSQL </td> </tr>
            <tr> <td> SASS </td> <td> Python </td> <td> Firebase Firestore </td> </tr>
            <tr> <td> Javascript </td> <td> Java </td> <td> MongoDB </td> </tr>
            <tr> <td> Typescript </td> <td> C# </td> <td> </td> </tr>
            <tr> <td> jQuery </td> ExpressJS <td> </td> <td> </td> </tr>
            <tr> <td> React </td> <td> </td> <td> </td> </tr>
            <tr> <td> Angular </td> <td> </td> <td> </td> </tr>
            <tr> <td> Webpack </td> <td> </td> <td> </td> </tr>    
        </table>
        <b> And the lists can be infinite. The truth is that there are hundreds of options in each category, and you can choose whatever you want that fits your needs. Just make sure you take these into consideration: </b>
        <h3> Choosing a Tech Stack </h3>
        When choosing one its always best to first go over your application's needs and limits. And you will have loads of questions, like <b> Does it need a backend? Does it need a database? Do I have the correct skill set for this? Is there an an active community for this? Etc, etc. </b>
        </section>
        <section id='considerations'>
        And you should consider all of them, but in-order for a clean start, <b>here are my best considerations </b> <ul> 
        <li> How much does this cost (on-time/ yearly/ monthly/ per usage etc) </li>
        <li> Do I have the correct skills for this? (What is the learning curve or process?) </li>
        <li> Are there people who can help me </li>
        <i> If you use a language/ framework/ software that not a lot of people use, trouble shooting problems and solving problems will be incredibly difficult as there will be not a lot of active people online to help </i>
        <i> Is this option secure for todays era? Does it have too many bugs with no fixes? </i> 
        </ul> 
        Make sure all your options are great from the start, it can save you time from re-writing the code and slow down your project. <b> But, its okay if you do. Theres always places to learn from. </b>  
        </section>
        And that was tech stacks! I hope this helped, if you would like to add/ edit/ question anything from this post, contact me at either at <a href='https://discord.com/invite/aYbBrAYQyN' target='_blank'> Discord </a> or <a href ='https://www.linkedin.com/in/tahaparacha/' target='_blank'> LinkedIn </a>. Have a great day`
    },
    { id: 'certificates',
        title: 'My Certifications',
        tags: ['about me', 'certificates'],
        thumbnail: certificatesThumb,
        body: ` As a self-taught developer, I've watched dozens of YouTube tutorials, however, I've also gone beyond that and invested in a paid Udemy course. Thus allowing me to prove my knowledge to the world with a certificate. 
        <h3> The Course </h3>
        The course was created by the <a href='https://www.youtube.com/@NetNinja' target='_blank'>@NetNinja</a> on YouTube. And after watching a few of his videos and tutorial series, I decided to unlock a whole new level of code by buying his <a target='_blank' href='https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/' target='_blank'> Udemy course </a>. The course was a follow-up from his free JavaScript YouTube series that allowed developers to "preview" the course and see if its right. I therefore watched it and learnt the basics of Javascript and then later on bought the 20.5 hour long course. 
        ++
        The course included many projects, including a functioning to-do list, a weather app, a chat app and a quiz app. Also, the course taught me essential skills such as how to use APIs, use noSQL services like Firebase, learn style frameworks and more! Learn more at <a target='_blank' href='https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/' target='_blank'> The course's page </a>.
        <h3> Certification </h3> 
        As seen on my LinkedIn, I did finish the course and got the certificate. The certificate it available on the official Udemy website <a target='_blank' href='https://www.udemy.com/certificate/UC-ca1abc7f-937b-4071-acbf-b9bf0ff24b86/'>here</a>.  
        ++
        You can also view the certificate as a PDF here:
        <iframe src="https://udemy-certificate.s3.amazonaws.com/pdf/UC-ca1abc7f-937b-4071-acbf-b9bf0ff24b86.pdf" title="My Javascript Certificate"></iframe>
        <h3> Summary </h3> 
        If you are a developer and is looking for a good and updated Javascript course, I 100% do recommend buying this course if you have the budget. The course (just like most Udemy courses) is around 100 USD, but is nearly always on sale, becoming around 13 USD. `
    },
    { id: 'what-is-sass',
        title: 'What Is Sass and Why You Should Use It',
        tags: ['coding', 'styles'],
        thumbnail: whatIsThumb,
        body: `SASS is a CSS extension and stands for Syntactically Awesome Stylesheet. SASS allows developers to code CSS much faster, however comes with a small catch...  
        + 
        +
        Unlike CSS, SASS cannot be read by the browser. Thus it <b>requires a compiler.</b> In this tutorial we will be using Visual Studio Code. This allows us to use the <a href='https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass' target='_blank'> Live Sass Compiler </a> extension.

        <section id='installing_the_compiler_extension'>
            <h3> How to Install The Extension </h3>
        
            This tutorial is created for those who are using Visual Studio Code and are familiar with its features. However no in-depth knowledge is required.
            <ol class='large'> <li> First go to the extensions tab. </li> 
            <img src="${extensionsTab}" alt='navigate to extensions tab'/> 
            
            <li>Then search for <code>Live Sass Compiler</code> and look for the extension named <code>Live Sass Compiler</code> and created by <code>Glenn Marks</code> </li>
            <img src="${extensionSearchSassCompiler}" alt='click Live Sass Compiler'/>

            <li>Click install and make sure it is enabled. </li>
            <img src="${extensionSassCompiler}" alt='Install the extension'/>

            <li>Your Done! Finish the tutorial to learn about how to use it. </li> </ol>
        </section>
        <section id='configering_the_compiler_extension'>
            <h3>Sass Compiler Configurations</h3>
            You may need to setup your Sass Compiler's settings.
            <ol class='large'>
                <li> First go to extensions tab and go to the Live Sass Compiler page Then click the config button. </li>
                <img src="${extensionSettings}" alt='Extension Settings'/> 

                <li> Then Click <code>Extension Settings</code> </li> <li> Now, click <code> Edit in settings.json</code> </li> <img src="${sassCompilerSettings}" alt='Click "edit in settings.json"'/>

                <li> Now, scroll up/down to line 19-21. It should look similar to this: </li>
                <codeblock> {+
                        <red>"format"</red>: <green>"expanded"</green>, <grey>// you can make this "compressed" if you want your compiled code to be in one line </grey>+
                        <red>"extensionName"</red>: <green>".css"</green>,+
                        <red>"savePath"</red>: <green>"/"</green> <grey>// you can make this wherever you want </grey>+
                    }
                </codeblock> </ol>
        </section>
        <section id='sass_Basics'>
            <h3>SASS Basics</h3>
            Now that the whole setup is done, you should be able to start "SASS-ing". 
            Creating a SASS file is simple. All you need to do is create a new file with the suffix <code>.scss</code>. I'm going to name mine <code>index.scss</code>. But you can name yours whatever you want.
            <img class='small' src="${sassNewFile}" alt='Create new Sass File'/>
            + +
            Now that you have created a new file, <b>you can start coding in SASS</b>. once again, SASS is very similar to CSS, however it has a few extra features.
            + +
            SASS is manly known for its <b>indentation</b>. This means that you can indent your code to make it more readable. For example, instead of writing this
            <pre> 
<r>nav ul {</r>
    <g>list-style</g>: <y>none</y>;
    <g>display</g>: <y>flex</y>;
    <g>gap<g/>: 10<y>px</y>;
}

<r>nav ul li</r>{
    <g>margin</g>: 0<y>px</y> 10<y>px</y>;
}
<r>nav ul li a </r>{
    <g>text-decoration</g>: <y>none</y>;
    <g>color</g>: <y>white</y>;
}
            </pre>
            You can simply convert it into:
            <pre>
<r>nav</r>{
    <r>ul</r>{
        <g>list-style</g>: <y>none</y>;
        <g>display</g>: <y>flex</y>;
        <g>gap<g/>: 10<y>px</y>;
        <r>li</r>{
            <g>margin</g>: 0<y>px</y> 10<y>px</y>;
            <r>a </r>{
                <g>text-decoration</g>: <y>none</y>;
                <g>color</g>: <y>white</y>;
            }
        }
    }
}
            </pre>
            With this, you can easily see which elements are inside which elements, and easily add more styles or new elements inside. 
            + +
            Another great feature is <b>variables</b>. Variables are a great way to store values and reuse them. For example, if you have a color that you use a lot, you can store it in a variable and reuse it.
            ++
            Here is how you do it.
            + First, declare a variable with the <code>$</code> symbol followed by your variable name.
            + Then, write a <code>:</code> and write the value of the variable.
            + Also, you can use variables inside your values! - Just make sure you've declared the variable above/ before.
            <pre>
<r>$primary-color</r>: <y>#ff007b</y>;
            </pre>
            + Then, you can use it anywhere in your code by simply typing the variable name.
            <pre>
<r>h1</r>{
    <g>color</g>: <y>$primary-color</y>;
}
            </pre>
            And, thats just the beginning. You can also use <b>mixins</b>, <b>nesting</b>, <b>inheritance</b> and more!
            You can read more on the official SASS website <a href='https://sass-lang.com/documentation/' target='_blank'>here</a>. The documentation is very beginner friendly and guides you through each step.
            ++
            <b> And thats it! </b> You now know the basics of SASS. I hope this helped you and I hope you have a great rest of your day. If you have any questions feel free to contact me!
        </section>
        `
        

    },
]

export default blogData