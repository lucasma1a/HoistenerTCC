import Banner from '../Carrossel/img/banner-carro.jpg'
import Banner1 from '../Carrossel/img/banner-carro2.jpg'
import Banner2 from '../Carrossel/img/banner-carro3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'

import '../Carrossel/Carrossel.modules.css'


function Carrossel(){
    const banner = [
        {
            id : 1,
            image : Banner
        },
        {
            id : 2,
            image : Banner1
        },
        {
            id : 3,
            image : Banner2
        }
    ]
    
    return(
        <>
        <div className='container-carrossel'>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {banner.map( (item) => (
                <SwiperSlide key={item.id}>
                    <img src="{item.image}" alt="Slide" className='container-carrossel-slide' />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    )

}
export default Carrossel