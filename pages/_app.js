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
              <meta name="background-color" content="pink"/>
              <meta name="short-name" content="GBHS MUTENGENE"/>
              <meta name="name" content="PLANOUS"/>
              <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
              <title>My app</title>
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