import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import aftersun from '../../img2/aftersun_capa.png'
import argentina from '../../img2/argentina_capa.jpg'
import che from '../../img2/che_capa.jpg'
import entergalatic from '../../img2/entergalatic_capa.png'
import greenbook from '../../img2/greenbook_capa.jpg'
import her from '../../img2/her_capa.jpg'
import inimigos from '../../img2/inimigos_capa.jpg'
import licorice_pizza from '../../img2/licorice_pizza_capa.jpg'
import lobo from '../../img2/lobo_capa.jpg'
import marighella from '../../img2/marighella_capa.jpg'
import pinoquio from '../../img2/pinoquio_capa.jpg'
import portal from '../../img2/portal_capa.jpg'
import queeneslim from '../../img2/queeneslim_capa.jpg'
import quehoras from '../../img2/quehoras_capa.jpg'

import styles from './FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
function Filmes(){
    const slides = [aftersun, argentina, che, entergalatic, greenbook, her, inimigos, licorice_pizza,  lobo, marighella,  pinoquio, portal, queeneslim, quehoras]
 
    return(
        <div className={styles.filmes_series}>
            <Swiper  
            autoplay={{delay: 2500}}
            modules={[Autoplay]}>
                
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slides}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Filmes