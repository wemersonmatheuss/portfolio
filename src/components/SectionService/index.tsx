import styles from "./styles.module.css"

import { CardService } from "../CardService"

import landingPage from "../../assets/landing-page (1) 1.svg"
import internet from "../../assets/internet 1.svg"
import sacola from "../../assets/sacolas-de-compras (1) 1.svg"
import inteligenciaArtifical from "../../assets/inteligencia-artificial 1.svg"
import prototipo from "../../assets/prototipo 2.svg"
import atualizar from "../../assets/atualizar 1.svg"


export function SectionService() {
    return (
        <div className={styles.container}>
            <h2>Alavanque seu negócio com um de nossos serviços</h2>

            <div className={styles.allServices}>
                <CardService icon={landingPage} title="Desenvolvimento de Landing Pages" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>


                <CardService icon={internet} title="Desenvolvimento de Sites Institucionais" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>


                <CardService icon={sacola} title="Criação de Lojas Online" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>


                <CardService icon={inteligenciaArtifical} title="Automações com IA" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>


                <CardService icon={prototipo} title="Prototipação do Seu Negócio" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>


                <CardService icon={atualizar} title="Atualização de Sites" paragraph="Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos."/>
            </div>
        </div>
    )
}