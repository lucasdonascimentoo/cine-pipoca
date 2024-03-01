import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import mare from '../../img/mare.png'
import peaky from '../../img/breakingbad.jpg'
import severance from '../../img/severance.jpg'
import sucession from '../../img/sucession.png'
import breakingbad from '../../img/mare.png'
import styles from './FilmesSeries.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
function Series(){
    const slides2 = [mare, peaky, severance, sucession, breakingbad]
    return(
        <div className={styles.filmes_series}>
            <Swiper  
            autoplay={{delay: 2500}}
          modules={[Autoplay]}
        >
                
                {slides2.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slides2}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Series