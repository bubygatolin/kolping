
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

import { ActiveLink } from '../ActiveLink';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
           <Image src={logo} alt="Kolping São José logo"/>
          </a>
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>

          <ActiveLink  href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink  href="/partners" activeClassName={styles.active}>
            <a>Parceiros</a>
          </ActiveLink>
          <ActiveLink  href="/donate" activeClassName={styles.active}>
            <a>Doe aqui!</a>
          </ActiveLink>
        </nav>      

      </div>
    </header>
  )
}