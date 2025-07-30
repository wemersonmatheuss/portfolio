import styles from "./styles.module.css"

import { CardProjects } from "../CardProjects"

import apex from "../../assets/image 3.svg"
import odontoPremium from "../../assets/image 1.svg"
import m10Tech from "../../assets/image 4.svg"
import m10TechLinkBio from "../../assets/image 2.svg"

export function SectionProject() {
    return (
        <div className={styles.container}>
            <h2>Conheça alguns projetos feitos por mim</h2>

            <div className={styles.allProjects}>
                <CardProjects image={apex}/>

                
                <CardProjects image={odontoPremium}/>
                
                
                <CardProjects image={m10Tech}/>
                
                
                <CardProjects image={m10TechLinkBio}/>
            </div>
        </div>
    )
}