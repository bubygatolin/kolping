import Head from 'next/head';
import styles from './styles.module.scss';

export default function Donate(){
    return(
        <>
            <Head>
                <title>Doe Kolping</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.containerDonate}>
                    <section className={styles.ctaText}>
                        <h1>DOE AGORA!</h1>
                        <span>Com seu apoio, podemos chegar a mais pessoas. Acesse a plataforma de doação Abrace uma Causa e contribua com nossos projetos.</span>
                        <br></br>
                        <img 
                            src="/images/doe.jpeg" 
                            alt="Conteúdos kolping" 
                        />                        
                            <button>
                             <form action="https://www.paypal.com/donate" method="post" target="_top">
                                <input type="hidden" name="hosted_button_id" value="4QHYG8MJZP92N" />
                                <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faça doações com o botão do PayPal" />
                                <img alt=""  src="https://www.paypal.com/pt_BR/i/scr/pixel.gif" width="1" height="1" />
                             </form>

                            </button>
                    </section>
                        
                       
                </div>
            </main>

            

        </>


    )
}