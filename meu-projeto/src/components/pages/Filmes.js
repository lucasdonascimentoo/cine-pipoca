import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import aftersun from '../../img/aftersun.png'
import her from '../../img/her.jpg'
import lobo from '../../img/Lobo_atras.jpg'
import pinoquio from '../../img/pinoquio.jpg'
import portal from '../../img/portal.png'

import styles from './FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
function Filmes(){
    const slides = [aftersun, her, lobo, pinoquio, portal]
 
    return(
        <div className={styles.filmes_series}>
            <Swiper  
            autoplay={{delay: 2500}}
          modules={[Autoplay]}
        >
                
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