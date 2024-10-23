import styles from '../about/About.module.css';
export default function Contato() {

    return (
        <div>
            <h2 className='subtitulo'>Contato</h2>

            <div class={styles.containerPrincipal}>

                <h2>Redes sociais</h2>
                <nav>
                    <a href="https://www.facebook.com/wagner.ferreira.filho">
                        <img class={styles.socialImg} src="images/facebook.png" alt="Logo Facebook" />
                    </a>
                    <a href="https://www.instagram.com/wagner.fferreira">
                        <img class={styles.socialImg} src="images/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com">
                        <img class={styles.socialImg} src="images/twitter.png" alt="Twitter" />
                    </a>
                </nav>
            </div>
            <div class={`${styles.containerPrincipal} ${styles.lastContainer} `}>
                <h2>Outros</h2>
                <div class={styles.containerContacts}>

                    <a href="mailto:wagner.ferreira@ifro.edu.br">
                        <img class={styles.socialImg} src="images/mail.png" alt="Contato e-mail" />
                    </a>
                    <a href="tel:+556921010700">
                        <img class={styles.socialImg} src="images/phone.png" alt="Contato telefone" />
                    </a>
                </div>
            </div>
        </div>
    )
}
