import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{
    return <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
            {/* <img className={styles.myAbt} src={getImageUrl("nav/about.png")}/> */}
            <ul className={styles.aboutItems}>
               <li className={styles.aboutItem}><img className={styles.cursorIcon} src={getImageUrl("nav/cursor.png")}/>
                <div>
                    <h3> A passionate fullstack developer with a background in 
                         system development.</h3>
                    <p>I hold a Diploma in Systems Development, 
                   where I developed a strong foundation in Systems Development's best practices. 
                   I’m skilled in Technologies/Tools in Angular, Spring Boot, PostgreSQL.</p>
                </div>
               </li>
               <li className={styles.aboutItem}> 
                <img className={styles.serverIcon} src={getImageUrl("nav/serverIcon.png")}/>
                 <div>
                    <h3>I am always eager to learn new things everyday.</h3>
                    <p>
                    It might be a new technology or new recipe anything that is new to me and interesting I go for it. 
                    </p>
                 </div>
               </li>
            </ul>    
            </div>
            </section>;
};


