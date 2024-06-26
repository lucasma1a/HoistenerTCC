import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Banner from '../Carrossel/img/2.png';
import Banner2 from '../Carrossel/img/3.jpeg';
import Banner1 from '../Carrossel/img/vermelho.png';


import '../Carrossel/Carrossel.modules.css';

function Carrossel() {
    const banner = [
        {
            id: 1,
            image: Banner
        },
        {
            id: 2,
            image: Banner1
        },
        {
            id: 3,
            image: Banner2
        }
    ];
    
    return (
        <div className='container-carrosse'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
            >
                {banner.map((item) => (
                    <SwiperSlide key={item.id} className='swiper'>
                        <img src={item.image} alt="Slide" className='container-carrossel-slide' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carrossel;
