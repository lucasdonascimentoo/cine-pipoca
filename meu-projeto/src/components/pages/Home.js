import {Link} from 'react-router-dom'


import Filmes from './Filmes'
import Series from './Series'

import styles from './Home.module.css'
function Home(){
    return(
        <section className={styles.home_container}>
            <Link className={styles.link} to="./Filmes1"><Filmes/></Link>
            <Link className={styles.link} to="./Series1"><Series/></Link>
        </section>
    )
}

export default Home