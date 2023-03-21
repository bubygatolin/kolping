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
                        <span>Com seu apoio, podemos chegar a mais beneficiários. Acesse a plataforma de doação Abrace uma Causa e contribua com nossos projetos sociais.</span>
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
                        <a href="https://www.facebook.com/people/CMAS-Conselho-Municipal-de-Assist%C3%AAncia-Social-Osasco/100083377696277/?paipv=0&eav=AfaBVI1j81Ft1pjykBQFxNuZY_r08yMohp1dnMpodLtsNdUVaZhVDmwPEbHdebVKBMY&_rdr">
                            <img 
                                src='/images/cmas.jpeg'
                            />
                        </a>
                        <a href="https://osasco.sp.gov.br/conselhos-tutelares-e-cmdca/">
                            <img 
                                src='/images/cmdca.jpeg'
                            />
                        </a>
                        <a href="http://www.condeca.sp.gov.br/">
                            <img 
                                src='/images/condeca.jpeg'
                            />
                        </a>
                        <a href="https://www2.sesc.com.br/portal/site/mesabrasilsesc/home//">
                            <img 
                                src='/images/mesa.jpeg'
                            />
                        </a>
                        
                    </section>
                </div>             
              
                

                      
                
            </main>
            <Form/>

            

        </>


    )
}