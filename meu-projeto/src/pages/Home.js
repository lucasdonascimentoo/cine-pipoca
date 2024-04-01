import {Link} from 'react-router-dom'


import Filmes from '../scripts/Filmes'
import Series from '../scripts/Series'

import styles from '../styles/Home.module.css'
function Home(){
    return(
        <section className={styles.home_container}>
            <Link className={styles.link} to="./Filmes1"><Filmes/></Link>
            <Link className={styles.link} to="./Series1"><Series/></Link>
        </section>
    )
}

export default Home