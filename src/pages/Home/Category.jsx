import { Link } from "react-router-dom"
import black from "../../../public/images/black.jpg"
import woman from "../../../public/images/woman.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const companyLogo = [
    {id: 1, img: <img src="/images/logo_eight.jpg" alt="logo" />},
    {id: 2, img: <img src="/images/logo_six.jpg" alt="logo" />},
    {id: 3, img: <img src="/images/logo_five.jpg" alt="logo" />},
    {id: 4, img: <img src="/images/logo_four.jpg" alt="logo" />},
    {id: 5, img: <img src="/images/logo_three.jpg" alt="logo" />},
    {id: 6, img: <img src="/images/logo_two.jpg" alt="logo" />},
    {id: 7, img: <img src="/images/logo_four.jpg" alt="logo" />},
]

function Category() {
    return (
        <div className="container px-4 mx-auto max-w-screen-2xl xl:px-28 py-28">
            <div>
                <ul className="flex items-center justify-around">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={false}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {companyLogo.map(({ id, img }) => (
                        <SwiperSlide key={id}>
                            <li className="w-32">{img}</li>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </ul>
            </div>

            {/* category grid */}
            <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
                <p className="bg-black text-white font-semibold rounded-sm inline-flex uppercase text-center p-2 md:p-1.5 md:-rotate-90">Explore new and popular styles</p>

                <div>
                    <Link to="/">
                        <img src={black} alt="" className="w-[40rem] hover:scale-105 transition-all duration-200" />
                    </Link>
                </div>

                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/"><img src={black} alt="" className="w-full transition-all duration-200 hover:scale-105" /></Link>
                        <Link to="/"><img src={woman} alt="" className="w-full transition-all duration-200 hover:scale-105" /></Link>
                        <Link to="/"><img src={woman} alt="" className="w-full transition-all duration-200 hover:scale-105" /></Link>
                        <Link to="/"><img src={black} alt="" className="w-full transition-all duration-200 hover:scale-105" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
