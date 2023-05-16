import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap';

import '../styles/globals.css'
import { useEffect } from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import MainLayout from '../components/MainLayout';
import MainNavbar from '../components/MainNavbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);


  return (
    <MainLayout  >
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
