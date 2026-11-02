import Header from '../components/Header.jsx'
import PersonCard from '../components/PersonCard.jsx'
import Footer from '../components/Footer.jsx'

import styles from '../styles/Home.module.css'

function Home() {
  
  return(
    <>
      <Header/>

      <div className={styles.layer_1}>
        <PersonCard/>
      </div>

      <Footer/>
    </>
    
  );

}

export default Home