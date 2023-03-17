import { AppProps } from 'next/app';
import '../styles/global.scss';

import { Header } from '../components/Header';
import { Footer } from '@/components/Footer';
import {FaWhatsapp} from 'react-icons/fa';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
       <a className="whats-link" href='https://wa.me/5511991402859/'>
         <FaWhatsapp
          className="fa-whats"
          size={40} 
                /></a>
      <Header/>      
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
