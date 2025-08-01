import styles from "./styles.module.css"

import { Button } from "../Button"

export function Hero() {
    return (
        <div className={styles.container}>
            <h1>Crio sites que encantam seus clientes, transmitem <span>confiança</span> e ajudam sua empresa a <span>vender mais.</span></h1>
            <p>Ter um site profissional é essencial para conquistar clientes. Eu desenvolvo soluções digitais estratégicas, pensadas para destacar sua marca e gerar resultados reais.</p>
            <Button title="Entre em contato agora" onClick={() => {
                window.open("https://wa.me/5581995166980?text=Olá!%20Quero%20fazer%20um%20orçamento", "_blank")
            }}/>
        </div>
    )
}