
import {GetServerSideProps} from 'next';

import styles from './post.module.scss';
import { getPrismicClient } from '../../services/prismic';
import Head from 'next/head';
import Image from 'next/image';

import * as prismicH from '@prismicio/helpers'




interface PostProps{
    post:{
        slug: string;
        title: string;
        description: string;
        cover: string;
        updateAt: string;
    }
}

export default function Post({ post } : PostProps){

 
    return(
       <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <main className={styles.container}>
            <article className={styles.post}>
                <Image
                    quality={100}
                    src={post.cover}
                    width={720}
                    height={410}
                    alt={post.title}
                    placeholder='blur'
                    blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8PDW7HgAGqgJkpiP/dgAAAABJRU5ErkJggg=='

                />

                <h1>{post.title}</h1>
                <time>{post.updateAt}</time>
                <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.description}}></div>
            </article>

        </main>
       
       </>
    )
}

export const getServerSideProps: GetServerSideProps =async ({req, params}) => {
    const { slug  } = params;
    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('post', String(slug), {});

    if(!response){
        return{
            redirect:{
                destination:'/posts',
                permanent: false
            }
        }
    }

    const post = {
        slug: slug,
        title: prismicH.asText(response.data.title),
        description: prismicH.asHTML(response.data.description),
        cover: response.data.cover.url,
        updateAt: new Date(response.last_publication_date).toLocaleString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    };

    
    return{
        props:{
            post
        }
    }
}