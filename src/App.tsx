import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { SectionService } from "./components/SectionService"
import { SectionProject } from "./components/SectionProject"
import { Form } from "./components/Form"
import { About } from "./components/About"

export function App() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero/>
      <SectionService/>
      <SectionProject/>
      <Form/>
      <About/>
    </div>
  )
}