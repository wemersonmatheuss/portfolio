import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    icon: string
    title: string
    paragraph: string
}

export function CardService({ icon, title, paragraph }: Props) {
    return (
        <div className={styles.container} id="service">
            <img src={icon} alt="Icone do serviço" />
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <Button title="Quero essa solução para mim"  onClick={() => {
                window.open("https://wa.me/5581995166980?text=Olá!%20Quero%20fazer%20um%20orçamento", "_blank")
            }}/>
        </div>
    )
}