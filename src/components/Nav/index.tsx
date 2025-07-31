import styles from "./styles.module.css"

import logo from "../../assets/Logo-WemersonDev 1.svg"

import { Button } from "../Button"

export function Nav() {

    return (
        <div className={styles.container} id="nav">
            <div className={styles.logo}>
                <img src={logo} alt="Logo do Wemerson" />
            </div>

            <div className={styles.navigation}>
                <div className={styles.links}>
                    <a href="#service">Serviços</a>
                    <a href="#project">Projetos</a>
                    <a href="#about">Sobre</a>
                </div>
                <Button title="Contrate" onClick={() => {
                    const section = document.getElementById("form")
                    section?.scrollIntoView({ behavior: "smooth"})
                }}/>
            </div>
        </div>  
    )
    
}