import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Dashboard.css' 
import 'react-dynamic-charts/dist/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-toastify/dist/ReactToastify.css"


import App from 'next/app';
import Head from 'next/head';
import Hnav from "../components/navbar/hnavbar"

import {SWRConfig} from "swr"




class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
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