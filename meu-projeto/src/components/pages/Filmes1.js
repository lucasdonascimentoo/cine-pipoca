import Movie from "../scripts/Movie"

import styles from  './FIlmes1.module.css'

function Filmes1(){
    return(
        <section className={styles.imagens}>
            <div className={styles.row}><Movie/></div>
        </section>
    )
}

export default Filmes1