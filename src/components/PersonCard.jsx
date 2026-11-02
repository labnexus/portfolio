import React, {useState} from 'react'
import styles from '../styles/PersonCard.module.css'



function PersonCard(props) {
    const [slide, setSlide] = useState(1);
    const sound = new Audio('flip.mp3');

    function ShiftRight() {
        sound.play();
        if (slide === 3) {
            setSlide(1)
        } else {
            setSlide(slide + 1)
        }
    }

    function ShiftLeft() {
        sound.play();
        if (slide === 1) {
            setSlide(3)
        } else {
            setSlide(slide - 1)
        }
    }

    if (slide === 1) {
        return(
            <div className={styles.person_card}>
                <div className={styles.person_card_info}>
                    <h1 style={{textAlign: 'center'}}>EL ABOUDI ADNANE</h1>                
                    <ul>
                        <li><p>Student at <b>National School of Applied Sciences</b> - <b>Tangier</b> - <b>Morocco</b></p></li>
                    </ul>
                    <img className={styles.person_card_image} src="Adnane1.jpeg"/>
                </div>
                <div className={styles.person_card_buttons}>
                    <button onClick={ShiftLeft}>←</button>
                    <button onClick={ShiftRight}>→</button>
                </div>
            </div>
        );
    }
    if (slide === 2) {
        return(
            <div className={styles.person_card}>
                <div className={styles.person_card_info}>
                    <h1 style={{textAlign: 'center'}}>EL ABOUDI ADNANE</h1>
                    <ul>
                        <li><p><b>Industrial Engineer</b> & <b>Information Systems</b> specialist</p></li>
                        <li><p>Experienced in tools like <b>SAP ECC</b> & <b>S4/HANA</b> to optimise production and the flow of ressources</p></li>
                    </ul>
                    <img className={styles.person_card_image} src="Adnane4.jpeg"/>
                </div>
                <div className={styles.person_card_buttons}>
                    <button onClick={ShiftLeft}>←</button>
                    <button onClick={ShiftRight}>→</button>
                </div>
            </div>

        );
    }
    if (slide === 3) {
        return(
            <div className={styles.person_card}>
                <div className={styles.person_card_info}>
                    <h1 style={{textAlign: 'center'}}>EL ABOUDI ADNANE</h1>
                    <ul>
                        <li>Strong Industrial backgroung with experience in <b>SCM</b> & <b>Six-Sigma</b></li>
                        <li>Strong knowledge of ERP Systems like <b>SAP</b> & <b>Odoo</b></li>
                        <li>Strong knowledge of Relational Databases using <b>PostgreSQL</b></li>
                        <li>Experience in <b>Linux</b> environment, <b>AWS</b> & <b>Java</b></li>
                        <li>Collaborate with Leads & developers on solutions and independently develop and deliver in an <b>Agile environment</b></li>
                        <li>Lends expertise to design, coding, testing, debugging, documenting, maintaining and modifying of computer programs</li>
                        <li>Performs investigation, analysis and resolution of technical problems</li>
                        <li>Work with users in an <b>Agile Development Approach</b> to understand requirements</li>
                        <li>Ready, willing, and able to pick up <b>New Technologies</b> and pitch in on story tasks</li>
                        <li>Able to research and learn <b>New Methodologies</b> and technologies and bring knowledge to the team</li>
                        <li>A self-driven, highly motivated technologist who can work with a high degree of autonomy and is able to prioritize effectively</li>
                        <li><b>Data Analysis</b> using tools like <b>Python</b>, <b>Excel VBA</b> & <b>power BI</b></li>
                    </ul>
                </div>
                <div className={styles.person_card_buttons}>
                    <button onClick={ShiftLeft}>←</button>
                    <button onClick={ShiftRight}>→</button>
                </div>
            </div>

        );
    }

}

export default PersonCard