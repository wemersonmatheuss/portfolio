import styles from "./styles.module.css"

import arrow from "../../assets/direito 1.svg"

type Props = React.ComponentProps<"button"> & {
    title: string
}

export function Button({ title }: Props) {
    return (
        <div>
            <button className={styles.container}>{title} <img src={arrow} alt="" /></button>
        </div>
    )
    
}