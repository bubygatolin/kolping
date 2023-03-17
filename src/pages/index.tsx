import { GetStaticProps } from 'next';

import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';


import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers'
type Content = {
  title: string;
  titleContent: string;
  linkAction: string;  
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
}

interface ContentProps{
  content: Content;
}

export default function Home({ content }: ContentProps) {
  
  
  return (
   <>
    <Head>
      <title>Terceiro setor - ODS</title>
    </Head>
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>{content.title}</h1>
          <span>{content.titleContent}</span>
          <a href={'/donate'}><br></br>
            <button>
              Doe já!
            </button>
          </a>
        </section>

        <img 
            src="/images/banner.jpeg" 
            alt="Conteúdos Sujeito Programador" 
        />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <section>
          <h2>{content.mobileTitle}</h2>
          <span>{content.mobileContent}</span>
        </section>

        <img src={content.mobileBanner} alt="Objetivos kolping" />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <img src={content.webBanner} alt="Kolping vila são jose" />

        <section>
          <h2>{content.webTitle}</h2>
          <span>{content.webContent}</span>
        </section>
      </div>

      <div className={styles.nextLevelContent}>
     
      </div>


    </main>
   </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();


  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  // console.log(response.results[0].data);

  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner    
  } = response.results[0].data;
  
  const content = {
    title: prismicH.asText(title),
    titleContent: prismicH.asText(sub_title),
    linkAction: link_action.url,    
    mobileTitle: prismicH.asText(mobile), 
    mobileContent: prismicH.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: prismicH.asText(title_web),
    webContent: prismicH.asText(web_content),
    webBanner: web_banner.url,
    
  };


  return{
    props:{
      content
    },
    revalidate: 60 * 2 // A cada 2 minutos
  }
}
