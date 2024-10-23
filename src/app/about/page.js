import styles from '@/styles/About.module.css';

const Sobre = () => {
    return (
        <div>
            <h2 className='subtitulo'>Sobre</h2>

            <div className={styles.containerPrincipal}>
                <div>
                    <h2>Atuação profissional</h2>
                    <div>
                        <p>Professor efetivo na área da computação do IFRO-Instituto Federal de Rondônia, <em>Campus</em> Vilhena
                        </p>
                        <div className={styles.linkSpace}>
                            <a className={styles.links} href="https://portal.ifro.edu.br/vilhena" target="_blank" rel="noopener noreferrer">IFRO Campus Vilhena</a>
                        </div>
                    </div>
                    <div id={styles.frame}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62272.64224901916!2d-60.1587927021643!3d-12.710803109935942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93b96be3e6498bd7%3A0x66ce4f62185d43bb!2sInstituto%20Federal%20de%20Rond%C3%B4nia%20-%20Campus%20Vilhena!5e0!3m2!1spt-BR!2sbr!4v1707506417767!5m2!1spt-BR!2sbr"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Currículo</h2>
                        <div class="card-box-sobre">
                            <p>Disponível na plataforma Lattes</p>
                            <a className={styles.links} class="links" href="https://lattes.cnpq.br/8387840879676874"
                                target="_blank" rel="noopener noreferrer">LATTES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;