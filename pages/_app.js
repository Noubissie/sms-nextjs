import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Dashboard.css' 
import 'react-dynamic-charts/dist/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <title>My app</title>
          <link rel="icon" type="image/x-icon" href="/PHOTO.jpg" />
        </Head>
        <Component { ...pageProps } />
      </div>
    );
  }
}

export default MyApp;