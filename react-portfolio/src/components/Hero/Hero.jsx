/* eslint-disable react/no-unescaped-entities */

import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Bilbo</h1>
            <p className={styles.description}>
                I'm a Fronend developer with 0 year experience using React. Reach out if you'd like to learn more!
            </p>
            <a className={styles.contactBtn} href="mailto:nhankoilu@gmail.com">Contact Me</a>

        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/hero_cropped.png")} alt="Hero-image" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}
