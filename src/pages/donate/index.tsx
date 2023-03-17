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
                        <span>Com seu apoio, podemos chegar a mais estudantes. Acesse a plataforma de doação Abrace uma Causa e contribua com nossos projetos educacionais.</span>
                        <br></br>
                            <button>
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="business" value="H542ZAPV536LA" />
                                    <input type="hidden" name="no_recurring" value="0" />
                                    <input type="hidden" name="item_name" value="A  Kolping é uma Associação sem fins lucrativos filantrópica e beneficente, atuando no âmbito da assistência social." />
                                    <input type="hidden" name="currency_code" value="BRL" />
                                    <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Faça doações com o botão do PayPal" />
                                   
                                </form>
                            </button>
                        </section>
                        
                        <img 
                            src="/images/banner.jpeg" 
                            alt="Conteúdos Sujeito Programador" 
                        />
                        
                </div>
            </main>

            

        </>


    )
}