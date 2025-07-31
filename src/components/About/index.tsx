import styles from "./styles.module.css"

import html from "../../assets/Vector.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import typescript from "../../assets/typescript.svg"
import react from "../../assets/react.svg"
import github from "../../assets/github.svg"
import git from "../../assets/git.svg"
import figma from "../../assets/figma.svg"


export function About() {
    return (
        <div className={styles.container} id="about">
            <h2>Mas afinal, quem é Wemerson?</h2>

            <div className={styles.infos}>
                <div className={styles.description}>
                    <p>
                        Sou desenvolvedor freelancer especializado na criação de sites que encantam seus clientes e vendem para você. Acredito que um bom site não é apenas bonito: ele precisa transmitir a essência da sua empresa, gerar confiança e entregar resultados reais.
                        Meu foco está em desenvolver sites com design limpo, rápido e funcional, pensados estrategicamente para atender às necessidades do seu negócio. Trabalho de forma próxima e amigável com cada cliente, entendendo a fundo o que sua marca representa para criar soluções personalizadas – nada de sites genéricos.
                    </p>
                </div>

                <div className={styles.technologys}>
                    <h3>Tecnologias</h3>
                    <div className={styles.technology}>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={javascript} alt="" />
                        <img src={typescript} alt="" />
                        <img src={react} alt="" />
                        <img src={github} alt="" />
                        <img src={git} alt="" />
                        <img src={figma} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}