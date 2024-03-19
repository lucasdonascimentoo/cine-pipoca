import aftersun from '../../img/aftersun.png'
import her from '../../img/her.jpg'
import lobo from '../../img/Lobo_atras.jpg'
import pinoquio from '../../img/pinoquio.jpg'
import portal from '../../img/portal.png'

import styles from  './FIlmes1.module.css'

function Filmes1(){
    return(
        <section className={styles.imagens}>
            <img src={aftersun}/>
            <img src={her}/>
            <img src={lobo}/>
            <img src={pinoquio}/>
            <img src={portal}/>
        </section>
    )
}

export default Filmes1