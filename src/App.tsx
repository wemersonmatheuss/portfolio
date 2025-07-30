import {} from "./global.css"
import styles from "./app.module.css"

import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { SectionService } from "./components/SectionService"

export function App() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero/>
      <SectionService/>
    </div>
  )
}