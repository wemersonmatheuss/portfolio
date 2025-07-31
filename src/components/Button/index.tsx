import styles from "./styles.module.css"

import arrow from "../../assets/direito 1.svg"

type Props = React.ComponentProps<"button"> & {
    title: string
    onClick?: () => void
}

export function Button({ title, onClick }: Props) {
    return (
        <div>
            <button className={styles.container} onClick={onClick}>{title} <img src={arrow} alt="" /></button>
        </div>
    )
    
}