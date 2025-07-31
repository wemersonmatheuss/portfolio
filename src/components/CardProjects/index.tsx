import styles from "./styles.module.css"

import { Button } from "../Button"

type Props = {
    image: string
    onClick?: () => void
    onClick2?: () => void
}

export function CardProjects({ image, onClick, onClick2 }:Props) {
    return (
        <div className={styles.container}>
            <img src={image} alt="Imagem do projeto" />
            <div className={styles.buttons}>
                <Button title="Visite o site" onClick={onClick}/>
                <Button title="Visite o repositório" onClick={onClick2}/>
            </div>
        </div>
    )
}