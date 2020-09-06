import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Dashboard.css' 
import 'react-dynamic-charts/dist/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-toastify/dist/ReactToastify.css"
// import "antd/dist/antd.css"

import App from 'next/app';
import Head from 'next/head';
import Hnav from "../components/navbar/hnavbar"

import {SWRConfig} from "swr"




// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   fetcher = async (url)=>{
//     const res = await fetch(url)
//     const time = await res.json()
//     return time
// }
//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <div>
       
//             <Head>
//               <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//               <meta name="description" content="Report Card Web App for GBHS MUTENGENE"/>
//               <meta name="application-name" content="GBHSMUTENGENE"/>
//               <meta name="author" content="Noubissie"/>
//               <meta name="robots" content="noindex follow"/>
//               <meta name="mobile-web-app-capable" content="yes"/>
//               <meta name="apple-mobile-web-app-capable" content="yes"/>
//               <meta name="theme-color" content="pink"/>
//               <meta name="background-color" content="pink"/>
//               <meta name="short-name" content="GBHS MUTENGENE"/>
//               <meta name="name" content="PLANOUS"/>
//               <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
//               <title>My app</title>
//               <link rel="icon" type="image/x-icon" href="/PHOTO.jpg" />
//             </Head>
//             {/* <SWRConfig value={{fetcher:this.fetcher,initialData: 0}}> */}
//             <SWRConfig value={{fetcher:this.fetcher,initialData:undefined,refreshInterval:1000}}>
//                 <Component { ...pageProps } />
//             </SWRConfig>
//       </div>
//     );
//   }
// }

// export default MyApp;
class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }
  fetcher = async (url)=>{
    const res = await fetch(url)
    const time = await res.json()
    return time
}
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
       
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="Report Card Web App for GBHS MUTENGENE"/>
              <meta name="application-name" content="GBHSMUTENGENE"/>
              <meta name="author" content="Noubissie"/>
              <meta name="robots" content="noindex follow"/>
              <meta name="mobile-web-app-capable" content="yes"/>
              <meta name="apple-mobile-web-app-capable" content="yes"/>

              <meta name="theme-color" content="pink"/>
              <meta name="apple-mobile-web-app-status-bar-style" content="pink"/>

              <meta name="background-color" content="pink"/>
              <meta name="short-name" content="GBHS MUTENGENE"/>
              <meta name="name" content="PLANOUS"/>
              <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
              <title>Sms-Mutengene</title>

              
              <meta name="twitter:card" content="/PHOTO.jpg"/>

              <meta property="fb:app_id" content="sms-123-cmr"/>
              <meta property="og:url" content="https://sms-mutengene.herokuapp.com/admin"/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content="Sms-mutengene"/>
              <meta property="og:image" content="/8.jpeg"/>
              <meta property="og:description" content="School management system prototype"/>
              <meta property="og:site_name" content="sms-Mutengene"/>
              <meta property="og:locale" content="en_US"/>
              <meta property="article:author" content="Noubissie Landry"/>

              <meta name="twitter:card" content="A school Mangement System prototype"/>
              <meta name="twitter:site" content="@site_account"/>
              <meta name="twitter:creator" content="@Noubiss95445462"/>
              <meta name="twitter:url" content="https://sms-mutengene.herokuapp.com/admin"/>
              <meta name="twitter:title" content="Sms Mutengene"/>
              <meta name="twitter:description" content="School Mangement System prototype"/> 
              <meta name="twitter:image" content="/7.jpeg"/>

              <meta name="mobile-web-app-capable" content="yes"/>
              <meta name="apple-mobile-web-app-capable" content="yes"/>
              
              <link rel="icon" type="image/x-icon" href="/PHOTO.jpg" />
            </Head>
            {/* <SWRConfig value={{fetcher:this.fetcher,initialData: 0}}> */}
            <SWRConfig value={{fetcher:this.fetcher,initialData:undefined,refreshInterval:1000}}>
                <Component { ...pageProps } />
            </SWRConfig>
      </div>
    );
  }
}

export default MyApp;