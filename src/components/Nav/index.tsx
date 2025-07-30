import styles from "./styles.module.css"

import logo from "../../assets/Logo-WemersonDev 1.svg"

import { Button } from "../Button"

export function Nav() {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo do Wemerson" />
            </div>

            <div className={styles.navigation}>
                <div className={styles.links}>
                    <a href="#">Serviços</a>
                    <a href="#">Projetos</a>
                    <a href="#">Sobre</a>
                </div>
                <Button title="Contrate"/>
            </div>
        </div>  
    )
    
}