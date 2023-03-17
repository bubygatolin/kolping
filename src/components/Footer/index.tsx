import Image from 'next/image';

import logo from '../../../public/images/logo.png';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';
import styles from './styles.module.scss';


export function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                
                <div className={styles.left}>
                    <div className={styles.location}>
                        <FaHome size={20} />
                        <div>
                            <p>Av. São José, 326 - Vila Ayrosa - Osasco/SP</p>
                        </div>
                    </div>       

                    <div className={styles.phone}>
                        <h4> <FaPhone size={20} /> (11)99140-2859</h4>
                    </div>  

                    <div>
                        <div className={styles.email}>
                            <a href="mailto:kolpingsaojose@gmail.com"><h4> <FaMailBulk size={20} />  kolpingsaojose@gmail.com</h4></a>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100009349207831&mibextid=ZbWKwL"><FaFacebook size={20} /></a>
                            <a href="https://instagram.com/kolpingdevilasao?igshid=ZDdkNTZiNTM="><FaInstagram size={20}/></a>
                        </div>               
                    </div>                              
                </div>
               

               
                   
               
                
                
            </div>
        </footer>
    )
}
    
        