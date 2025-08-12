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


                <CardService icon={internet} title="Desenvolvimento de Sites Institucionais" paragraph="Crio Sites Institucionais únicos, modernos e alinhados à identidade da sua marca — perfeitos para destacar o seu negócio."/>


                <CardService icon={sacola} title="E-commerce" paragraph="Desenvolvo Lojas Virtuais exclusivas, responsivas e otimizadas para vendas — prontas para todos os dispositivos."/>


                <CardService icon={inteligenciaArtifical} title="Automações com IA" paragraph="Implemento Soluções de Automação com IA personalizadas e inteligentes — projetadas para aumentar sua produtividade."/>


                <CardService icon={prototipo} title="Prototipação do Seu Negócio" paragraph="Realizo Prototipação detalhada e visual do seu negócio — ideal para validar ideias e atrair investidores."/>


                <CardService icon={atualizar} title="Atualização de Sites" paragraph="Faço Atualização completa do seu site, tornando-o moderno, rápido e responsivo — pronto para impressionar clientes."/>
            </div>
        </div>
    )
}