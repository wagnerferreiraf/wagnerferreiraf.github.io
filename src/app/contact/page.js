import styles from '../about/about.module.css';
export default function Contato() {

    return (
        <div>
            <h2 className='subtitulo'>Contato</h2>

            <div class="sidebar" id="sidebar">
                <nav>
                    <ul class="menu">
                        <li class="item-menu-topo"><a class="link-menu" href="index.html">Home</a></li>
                        <li class="item-menu-topo"><a class="link-menu" href="sobre.html">Sobre Mim</a></li>
                        <li class="item-menu-topo"><a class="link-menu" href="contato.html"> Contato</a></li>
                        <li class="item-menu-topo subitem-toggle"><a class="link-menu" href="#">Slides</a>
                            <ul>
                                <li class="item-menu-topo subitem-list"><a class="link-menu" href="slides-front-end-i.html">Front-end I</a></li>
                                <li class="item-menu-topo subitem-list"><a class="link-menu" href="slides-front-end-ii.html">Front-end II</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <button class="toggle-btn" onclick="toggleSidebar()">☰</button>

            <div class="conteudo">
                <header>
                    <div class="primeiro-container">
                        <h1>Contato</h1>
                    </div>
                </header>

                <main>
                    <div class="divs">
                        <div class="card-fundo-colorido">
                            <h2>Redes sociais</h2>
                            <nav>
                                <a href="https://www.facebook.com/wagner.ferreira.filho">
                                    <img class={styles.socialImg} src="images/facebook.png" alt="Logo Facebook" />
                                </a>
                                <a href="https://www.instagram.com/wagner.fferreira">
                                    <img class="rede-social" src="img/instagram.png" alt="Instagram" />
                                </a>
                                <a href="https://www.twitter.com">
                                    <img class="rede-social" src="img/twitter.png" alt="Twitter" />
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="divs contato" id="ultimo-container">
                        <div class="card-fundo-colorido">
                            <h2>Outros</h2>
                            <a href="mailto:wagner.ferreira@ifro.edu.br">
                                <img class="rede-social" src="img/mail.png" alt="Contato e-mail" />
                            </a>
                            <a href="tel:+556921010700">
                                <img class="rede-social" src="img/phone.png" alt="Contato telefone" />
                            </a>
                        </div>
                    </div>
                </main>

                <footer>
                    <small>&copy;2024 all rights reserved</small>
                </footer>
            </div>
        </div>
    )
}
