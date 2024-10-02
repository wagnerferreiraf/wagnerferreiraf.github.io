import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.divFooter}>
                <div className={styles.divLinksUteis}>
                    <div className={styles.divFooterLinks}>
                        <h3 className={styles.h3}>IFRO</h3>
                        <ul>
                            <li><a href='https://portal.ifro.edu.br' target="_blank">Portal do IFRO</a></li>
                            <li><a href='https://virtual.ifro.edu.br/vilhena' target="_blank">AVA</a></li>
                            <li><a href='https://suap.ifro.edu.br' target='_blank'>Suap</a></li>
                        </ul>
                    </div>
                    <div className={styles.divFooterLinks}>
                        <h3 className={styles.h3}>Sobre</h3>
                        <ul>
                            <li><a href='sobre.html'>Sobre</a></li>
                            <li><a href='contato.html'>Contato</a></li>
                            <li><a href='https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4434533T9'
                                target='_blank'>Lates</a></li>
                        </ul>
                    </div>
                    <div className={styles.divFooterLinksUteis}>
                        <h3 className={styles.h3}>Links Úteis</h3>
                        <ul>
                            <li><a href='https://code.visualstudio.com/' target='_blank'>VsCode</a></li>
                            <li><a href='https://developer.mozilla.org/pt-BR/docs/Web' target='_blank'>MDN</a></li>
                            <li><a href='https://react.dev/' target='_blank'>React</a></li>
                            <li><a href='https://nextjs.org/docs' target='_blank'>Next Js</a></li>
                            <li><a href='https://github.com/' target='_blank'>GitHub</a></li>
                            <li><a href='https://figma.com/' target='_blank'>Figma</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.divSocialMedia}>
                    <a href='https://www.facebook.com/wagner.ferreira.filho'>
                        <img className={styles.socialIcon} src='/images/facebook.svg' alt='Logo Facebook' />
                    </a>
                    <a href='https://www.instagram.com/wagner.fferreira'>
                        <img className={styles.socialIcon} src='/images/instagram.svg' alt='Instagram' />
                    </a>
                    <a href='https://www.twitter.com'>
                        <img className={styles.socialIcon} src='/images/twitter.svg' alt='Twitter' />
                    </a>
                </div>
                <div className={styles.copyright}>
                    <div><img src='https://profile-counter.glitch.me/wagnerferreiraf/count.svg' /></div>
                    <p>Prof. Wagner &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;