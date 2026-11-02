import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'


function Header() {
    return(
        <header>
            <p>Adnane El Aboudi</p>

            <nav>
                <ul>
                    <li><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></li>
                    <li><Link to="/about" style={{textDecoration: 'none', color: 'white'}}>About</Link></li>
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

            </nav>
           <hr/>
        </header>
    );

}

export default Header