"use client";
import styles from '@/styles/Front.module.css';
import HamburgerMenuContainer from '@/components/HamburgerMenuContainer.js';
import { useState, memo } from 'react';
import Link from 'next/link';

// Componente Memoizado para o iframe
const Frame = memo(({ url }) => {
    return <iframe src={url} className={styles.presentationIframe} />;
});

const FrontII = () => {
    const [frameSeted, setFrame] = useState(''); // URL do iframe
    const [maxHeights, setMaxHeights] = useState(['61px', '61px', '61px']); // Altura máxima de cada container
    const [openIndex, setOpenIndex] = useState(null); // Índice do container aberto
    const [iconStates, setIconStates] = useState([false, false, false]); // Estado dos ícones

    const changeIframe = (url) => {
        setFrame(url);
        setMaxHeights(['61px', '61px', '61px']); // Reseta todos os containers
        setIconStates([false, false, false]); // Reseta todos os ícones
        setOpenIndex(null); // Reseta o índice aberto
    };

    const toggleMaxHeight = (index) => {
        // Se o índice clicado já está aberto, fecha-o
        if (openIndex === index) {
            setMaxHeights(['61px', '61px', '61px']); // Reseta todos os containers
            setIconStates([false, false, false]); // Reseta todos os ícones
            setOpenIndex(null); // Reseta o índice aberto
        } else {
            // Abre o container clicado e fecha os outros
            setMaxHeights((prevMaxHeights) =>
                prevMaxHeights.map((_, i) => (i === index ? 'none' : '61px')) // Fecha os outros containers
            );
            setIconStates((prevIconStates) => {
                return prevIconStates.map((_, i) => (i === index ? true : false)); // Apenas o ícone do container aberto deve ser true
            });
            setOpenIndex(index); // Atualiza o índice do container aberto
        }
    };

    return (
        <>
            <h2 className='subtitulo'>Front-end I</h2>
            <div className={styles.mainContainer}>
                <div className={styles.flexMainContainer}>
                    <div className={styles.flexListContainer}>
                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[0] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(0)}
                                isOpen={iconStates[0]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>1º Bimestre</p>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vS_DGSGltGz07A0N9jzv60fWA3NEqcLZb4I0FHb81D3-MBd6cvlB4F5FDb4_FgfZA/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Introdução
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vQ_utnWaCnM1qZaKcBdBoatP1HJwmhxHvl-2XvNr-z17QOfKIFd0JBboFfyL0DObFyLcUFqagqQAqSu/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Estrutura
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vQyiz5C0vAxu7K5kCvDOQC3Aw_Alm6IL51iJ8AUftrj3StWLzlrgjn5vR18qjgaWn4vuLe_m5egNvJS/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Tags de cabeçalho
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vStT9nyTPRAbV9npB-CY3CUsj7QvnqErgsRs57upVa7MU3j_steU2Sii079Rwr0Vv9lAYYBl6oaJeI0/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Tags de Básicas
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vT8ugt4XYr65q6rv7CTID2f_iSLSTNCcSRPPaWDySBU8Yqoaw5DbUwk87AiCd5Uoiv4ZWBCgUjwTQoO/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Listas
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vRmQnvpe4HisheiD4BQCNF-4Gcmqu2Ha9beOaqjh5pmWrgYmvlEAuIUzeXS908pYFXfsaHLMLNPOa2i/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        CSS
                                    </Link>
                                </li>

                            </ol>
                        </div>

                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[1] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(1)}
                                isOpen={iconStates[1]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>2º Bimestre</p>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vTP17NQW9mWxRMPOHNVnn0ZPWe41Or6CnpMw5w18iP6YV0FnX1Se-88_zxkSHI9j6DnHmFFAo3Dlnet/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        HTML
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/1WoisxxAuAgmODcceMAFK9OWTToSTMvZWz2y0uD4O_l0/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        CSS
                                    </Link>
                                </li>
                            </ol>
                        </div>

                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[2] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(2)}
                                isOpen={iconStates[2]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>Atividades</p>
                                <p>1º Bimestre</p>
                                <li>
                                    <a
                                        className={styles.listItemLink}
                                        href="https://drive.google.com/drive/folders/1GdhgdxPLpdLazkiRJ2MRuwwK4bNfb4Xf?usp=sharing"
                                        target="_blank"
                                    >
                                        Publique seu site (GitHub Pages)
                                    </a>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vTKwFOoIK_gwDNgJ7w57S9c8mWlJMiH6A0Q-ljXaw0PWprwC5wHpBFOtKBvwRZSoF5B0LgNT8o0idz1/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Página Web para divulgação de um livro
                                    </Link>


                                </li>
                                <p>2º Bimestre</p>


                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="https://drive.google.com/drive/folders/1HiBwIcSk9OQV-kqVvHPvWnDlaT_iq7S6?usp=sharing"
                                        target="_blank"
                                    >
                                        Flexbox
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vQgUs86UbvFWQjLZYdu7BTzTFBWj2fdLoaE31cuxp7BeTukETLE91QytDAYUnGsswl4QdBxFDNe2sJz/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        Atividade Presencial - Tema Livre <strong>[10/09]</strong>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/e/2PACX-1vT2sCh7i2VUInlupwRpx2W6DYl9VcpVn4hX3GFh2qOSlFZRMTbSuXHtEgPk9D22FBJdY-jo6nNtqOje/embed?start=false&loop=false&delayms=3000')
                                        }

                                    >
                                        ANP - Portfólio Pessoal <strong>[10/09]</strong>
                                    </Link>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
                <div className={styles.coloredCard}>
                    <Frame url={frameSeted} /> {/* Passando o URL para o componente memoizado */}
                </div>
            </div >
        </>
    );
};

export default FrontII;