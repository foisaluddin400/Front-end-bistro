
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slid1 from '../../assets/home/slide1.jpg';
import slid2 from '../../assets/home/slide2.jpg';
import slid3 from '../../assets/home/slide3.jpg';
import slid4 from '../../assets/home/slide4.jpg';
import slid5 from '../../assets/home/slide5.jpg';
import SectionHead from '../Shared/SectionHeading/SectionHead';


const Catagorie = () => {
    return (
        <div>
            <div>
                <SectionHead 
                sectionPar={'---From 11:00am to 10:00pm---'}
                sectionhead={'ORDER ONLINE'}
                >

                    
                </SectionHead>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slid1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slid2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slid3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slid4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slid5} alt="" /></SwiperSlide>              
            </Swiper>
        </div>
    );
};

export default Catagorie;