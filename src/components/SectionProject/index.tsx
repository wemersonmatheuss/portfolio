import styles from "./styles.module.css"

import { CardProjects } from "../CardProjects"

import apex from "../../assets/image 3.svg"
import odontoPremium from "../../assets/image 1.svg"
import m10Tech from "../../assets/image 4.svg"
import m10TechLinkBio from "../../assets/image 2.svg"

export function SectionProject() {
    return (
        <div className={styles.container} id="project">
            <h2>Conheça alguns projetos feitos por mim</h2>

            <div className={styles.allProjects}>
                <CardProjects image={apex} onClick={() => {
                    window.open("https://apex-iota-wheat.vercel.app/", "_blank")
                }} onClick2={() => {
                    window.open("https://github.com/wemersonmatheuss/apex")
                }}/>

                
                <CardProjects image={odontoPremium} onClick={() => {
                        window.open("https://odonto-premium.vercel.app/", "_blank")
                    }} onClick2={() => {
                        window.open("https://github.com/wemersonmatheuss/m10tech-store")
                    }}
                />
                
                
                <CardProjects image={m10Tech} onClick={() => {
                        window.open("https://m10tech-store.vercel.app/", "_blank")
                    }} onClick2={() => {
                        window.open("https://github.com/wemersonmatheuss/m10tech")
                    }}
                />
                
                
                <CardProjects image={m10TechLinkBio} onClick={() => {
                        window.open("https://m10tech-bio.vercel.app/", "_blank")
                    }} onClick2={() => {
                        window.open("https://github.com/wemersonmatheuss/m10tech-bio")
                    }}
                />
            </div>
        </div>
    )
}