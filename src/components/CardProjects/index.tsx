import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    image: string
}

export function CardProjects({ image }:Props) {
    return (
        <div className={styles.container}>
            <img src={image} alt="Imagem do projeto" />
            <div className={styles.buttons}>
                <Button title="Visite o site"/>
                <Button title="Visite o repositório"/>
            </div>
        </div>
    )
}