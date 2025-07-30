import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    icon: string
    title: string
    paragraph: string
}

export function CardService({ icon, title, paragraph }: Props) {
    return (
        <div className={styles.container}>
            <img src={icon} alt="Icone do serviço" />
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <Button title="Quero essa solução para mim"/>
        </div>
    )
}