import mare from '../../img/mare.png'
import peaky from '../../img/breakingbad.jpg'
import severance from '../../img/severance.jpg'
import sucession from '../../img/sucession.png'
import breakingbad from '../../img/mare.png'

import styles from './FIlmes1.module.css'
function Series1(){
    return(
        <section className={styles.imagens}>
            <img src={mare}/>
            <img src={peaky}/>
            <img src={severance}/>
            <img src={sucession}/>
            <img src={breakingbad}/>
        </section>

    )

}

export default Series1