/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"


export const About = () => {
  return <section  id="about" className={styles.container}>
    <h2 className={styles.title}>ABOUT</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage2.png")} 
            alt="Me sitting a laptop"
            className={styles.aboutImage}
        />
            
        <ul className={styles.aboutItems}>
            {/* Frontend */}
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}
                    alt="" 

                 />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>

            {/* Backend */}
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>

            {/* UI */}
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>

        </ul>
    </div>
  </section>
}