<h1> SMS MUTENGENE </h1>

    An application used to manage the workflow in secondary schools, built with React, Nextjs,JavaScript, Nodejs, prisma, MySQL.

<h1>Project Status</h1>
This project is currently in development.



<h1>Installation and Setup Instructions</h1>

    Clone down this repository. You will need node and npm installed globally on your machine.

<h1>Installation:</h1>

    npm install


<h1>To Start Server:</h1>

    npm run dev


<h1>To Visit App:</h1>

    localhost:3000

<h1>Built With</h1>
[] <a href="https://nextjs.org/docs">nextjs</a><br/>
[] <a href="https://reactjs.org/docs/hooks-intro.html">reacthooks</a><br/>
[] nodejs<br/>
[] javascript<br/>
[] <a href="https://www.prisma.io/docs/">prisma2</a><br/>
[] mysql<br/>

<h1>Contributing</h1>
    Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

<h1>Authors</h1>
[] Noubissie(@obito0)<br/>
[] Clint Jason(@clintjason)<br/>
<h1>USAGE</h1>
<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components">React Components/next component folder</a></h2>
<h2  ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/age">age:</a></h2>
<h3> to calculate user age</h3>

<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/calendar">calender: </a></h2>
<h3>contains agenda component and events to be stored on the agent, to be repleased by fetch or a graphql api call </h3>

<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/charts">charts:</a> </h2>
<h3>contain the chart components to be render on the UI</h3>

<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/decoration">decoration:</a> </h2>
<h3>contains basic UI decoratios like the toast bar the appears on Submit of addstudentForm</h3>

<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/myselect">myselect:</a> </h2>
<h3>controls react-select, to be remove, difficult to control with react-formik</h3>

<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/components/navbar">navbar:</a> </h2>
<h3>contains the navigation bar component: </br>
    {</br>hnav:Horizontal nav bar,</br> vnav:vertical nav bar</br> VnavbarIcon:Icons nav bar</br>
    VnavFull: vertical navbar</br>}</br>
    to be replaced before the end of the project with a bootstrap customized navbar
    </h3>
<h3>noticeBoard: components with relation to the notice board/ chatapp</h3>
<h3>prismaClient: instantiating the ORM. Multiple instatiation let to an error "too many connections" most be called once </h3>
<h3>browserSiteOutput: contains a UI component to render the urkLink to the page using bootstrap Breadcrumb. can't be rendered directly due to the absents of Windows object in node js so most be render dynamically </h3>  
<h3>Layout: component to control the entire layout of the project</h3>   
<h3></h3>   
<h2 href=>database</h2>
<h3>Contains the database components and all database CRUD operations classes</h3>
<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/pages">pages</a></h2>
<h3>contains all the pages/ url used in next js. Evey file here represents a url and any file in the api folder serves as an api to carryout dynamic search and update to the DOM</h3>
<h2 ><a href="https://gitlab.com/obito0/sms-mutengene/-/tree/master/prisma">prisma:</a></h2>
<h3>Contains the prisma(ORM) schema to communicate with teh database</h3>
