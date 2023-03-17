import Head from 'next/head';
import styles from './styles.module.scss';
import Form from '@/components/Form';

export default function Donate(){
    return(
        <>
            <Head>
                <title>Doe Kolping</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.containerParceiros}>
                    <section className={styles.ctaText}>
                        <h1>Nossos Parceiros!</h1>
                        <span>Com seu apoio, podemos chegar a mais estudantes. Acesse a plataforma de doação Abrace uma Causa e contribua com nossos projetos educacionais.</span>
                    </section>                   
                          
                </div>

                <div className={styles.partners}>
                    <section>
                        <a href="https://institutogatolin.org/">
                            <img 
                                src='/images/gatolin.jpeg'
                            />
                        </a>
                        <a href="https://scompany.org.br/">
                            <img 
                                src='/images/scompany.jpeg'
                            />
                        </a>
                        <a href="http://www.idehm.org/">
                            <img 
                                src='/images/idehm.jpeg'
                            />
                        </a>
                        
                        
                    </section>
                </div>             
              
                

                      
                
            </main>
            <Form/>

            

        </>


    )
}