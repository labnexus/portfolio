import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css'

function About() {
  
  return(
    <>
        <div className={styles.navigation_1}>
            <ul className={styles.list_left}>
                <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Trifuerza.svg/500px-Trifuerza.svg.png'></img></li>
                <li><b>Adnane El Aboudi</b></li>
                <li><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link></li>
                <li><Link to='/about' style={{textDecoration: 'none', color: 'black'}}>About</Link></li>
                <li>
                    <div className={styles.dropdown}>
                        <div className={styles.dropdown_button}>Socials</div>
                            <div className={styles.dropdown_content}>
                                <Link to='https://www.youtube.com/@adnaneelaboudi7313' target='_blank'>YouTube</Link>
                                <Link to='https://www.facebook.com/adnane.elaboudi.9/' target='_blank'>Facebook</Link>
                                <Link to='https://www.instagram.com/elaboudiadnane/' target='_blank'>Instagram</Link>
                                <Link to='https://x.com/DrBellcraft/' target='_blank'>X</Link>
                            </div>
                        </div>
                </li>
            </ul>

            <ul className={styles.list_right}>
                <li><Link to='https://www.linkedin.com/in/adnane-elaboudi/' target='_blank' style={{textDecoration: 'none', color: 'black'}}>LinkedIn</Link></li>
                <li><Link to='https://github.com/labnexus/' target='_blank' style={{textDecoration: 'none', color: 'black'}}>GitHub</Link></li>
            </ul>

        </div>

        <div className={styles.navigation_2}>
            <div className={styles.left}>
                <h1>Adapt to Change</h1>
                <p>Ready to deliver value through Methodology, not Frameworks</p>
            </div>

            <div className={styles.right}>
                <img src='Adnane3.jpeg'/>
            </div>

        </div>

        <div className={styles.main}>
            <div className={styles.layer_1}>
                <div className={styles.layer_1_left}>
                    <img src='Adnane2.jpeg'/>
                </div>

                <div className={styles.layer_1_right}>
                    <h1>We build step by step through Continuous Improvement</h1>
                    <ol>
                        <li>
                            <h2>Strong SAP Implementation & Catia Design</h2>
                            <p>Design EDI systems. SAP PP experience. Experience in <b>Linux</b> environment, <b>AWS</b> & <b>UML Design</b></p>
                        </li>
                        <li>
                            <h2>SCADA & PLC Knowledge</h2>
                            <p>Good understanding of PLC Development work. Collaborate with Leads & developers on solutions and independently develop and deliver in an <b>Agile Environment</b></p>
                        </li>
                        <li>
                            <h2>Manufacturing, Design & Six-Sigma</h2>
                            <p>Strong knowledge of capability analysis, SPC & MSA using <b>MiniTab</b>. Data Analysis using tools like <b>Python</b>, <b>Excel VBA</b> & <b>power BI</b></p>
                        </li>
                    </ol>
                </div>
            </div>

            <div className={styles.layer_2}>
                <h1>Looking for a valuable Internship to implement my skills and add value to your Business</h1>

                <div className={styles.layer_2_content}>
                    <div className={styles.layer_2_object}>
                        <img src='https://learning.sap.com/_next/image?url=https%3A%2F%2Feu-images.contentstack.com%2Fv3%2Fassets%2Fblt4e79a2501da5d16b%2Fblt01fc299803341a82%2F67b889348c3aac134082474f%2FGroup_163967.png&w=1920&q=75'/>
                        <h2>Team Work</h2>
                        <p>We work in teams to deliver Value and Quality, and build the Future from the ground up.</p>
                    </div>

                    <div className={styles.layer_2_object}>
                        <img src='https://learning.sap.com/_next/image?url=https%3A%2F%2Feu-images.contentstack.com%2Fv3%2Fassets%2Fblt4e79a2501da5d16b%2Fblt296968babd20040a%2F67b8891a0ae52c96c9de6edf%2FGroup_163968.png&w=1920&q=75'/>
                        <h2>Autonomy</h2>
                        <p>Can work Autonomously to Define, Mesure, Analyse, Improve and Sustain our products.</p>
                    </div>
                    <div className={styles.layer_2_object}>
                        <img src='https://learning.sap.com/_next/image?url=https%3A%2F%2Feu-images.contentstack.com%2Fv3%2Fassets%2Fblt4e79a2501da5d16b%2Fblta7e7c3ae8d6a7a7b%2F67b888d06fe6134c39563af1%2FGroup_163969.png&w=1920&q=75'/>
                        <h2>Digital Transformation</h2>
                        <p>Ability to use BI tools like Powe BI, Excel VBA, SAP and create Dashboards and KPIs visualizations</p>
                    </div>
                </div>
                
            </div>

        </div>

        <div className={styles.foot}>
            <h1>Thank you very much for liking my Profile, Looking forward to work with you on a professional scale and improve both of our prospects together.</h1>
            <h1>Check my LinkeIn, my GitHub and other resources about me.</h1>
        </div>

        
      
    </>
    
  );

}

export default About