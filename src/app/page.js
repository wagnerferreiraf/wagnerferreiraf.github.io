import styles from '@/styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <h2 className='subtitulo'>Home</h2>
            <div className={`${styles.divs} ${styles.cards}`}>

                <div className={styles.card}>

                    <table className={styles.table}>
                        <caption>
                            <h2 className={styles.subtitulo}>Disciplinas Ministradas</h2>
                        </caption>
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.th}>Disciplina</th>
                                <th className={styles.th}>Turma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>Lógica de Programação</span></td>
                                <td>1os anos</td>
                            </tr>
                            <tr>
                                <td><span>Linguagem de Programação</span></td>
                                <td>1os anos</td>
                            </tr>
                            <tr>
                                <td><span>Front-end I</span></td>
                                <td>2os anos</td>
                            </tr>
                            <tr>
                                <td><span>Front-end II</span></td>
                                <td>2os anos</td>
                            </tr>
                            <tr>
                                <td><span>Fábrica de software I</span></td>
                                <td>2os anos</td>
                            </tr>
                            <tr>
                                <td><span>Fábrica de software II</span></td>
                                <td>2os anos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`${styles.card} ${styles.cardNavegacao}`}>
                    <h2 className={styles.subtitulo}>Projetos 2024</h2>

                    <div className={styles.cardLinks}>
                        <nav className={styles.projetos}>
                            <Link className={styles.links} href="atividades-2a.html">2º A</Link>
                            <Link className={styles.links} href="atividades-2b.html">2º B</Link>
                            {/* <Link className={styles.links} href="trabalho-avaliativo-1-bimestre.html">1º Bimestre</Link> */}
                            <a className={styles.links}
                                href="https://docs.google.com/spreadsheets/d/1sQI0fGEdmvHMJVBtg8HXZUX66SvQazzMyWQfaXifpDo/edit#gid=0"
                                target="_blank">Editar Planilha</a>
                        </nav>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.cardNavegacao}`}>

                    <h2 className={styles.subtitulo}>Material de estudo [Front-end I]</h2>

                    <div className={styles.cardLinks}>
                        <nav className="botoes">
                            <Link className={styles.links} href="slides-front-end-i.html">Slides</Link>
                            <Link className={styles.links} href="cores.html">Cores</Link>
                            <a className={styles.links} href="https://developer.mozilla.org/pt-BR/docs/Web" target="_blank">MDN</a>
                        </nav>
                    </div>
                </div>

                <div className={`${styles.card} ${styles.cardNavegacao}`}>

                    <h2 className={styles.subtitulo}>Material de estudo [Front-end II]</h2>

                    <div className={styles.cardLinks}>
                        <nav className="botoes">
                            <Link className={styles.links} href="slides-front-end-ii.html">Slides</Link>
                            <a className={styles.links} href="https://developer.mozilla.org/pt-BR/docs/Web" target="_blank">MDN</a>
                            <a className={styles.links} href="https://react.dev/" target="_blank">React</a>
                            <a className={styles.links} href="https://nextjs.org/docs" target="_blank">Next.js</a>
                        </nav>
                    </div>
                </div>


            </div>
        </>
    )
}