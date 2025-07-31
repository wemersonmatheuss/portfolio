import styles from "./styles.module.css"

import logo from "../../assets/Logo-WemersonDev 1.svg"
import arrowTop from "../../assets/right 1.svg"

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src={logo} alt="Imagem da logo de Wemerson" />

                <a href="#nav"> <img src={arrowTop} alt="" /> Voltar ao topo</a>
            </div>

            <div className={styles.line}></div>   

            <div className={styles.bottom}>
                <p>2025 © Wemerson | Dev.</p>
                <a href="https://www.instagram.com/wemersonmth/" target="_blank" rel="noopener">Desenvolvido por Wemerson Dev.</a>
            </div>
        </div>
    )
}