import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getSession } from '@/lib/utils';

export default function CustomerHome() {
    const session = getSession();

    return (
        <div id="Content-Container" className="relative flex flex-col w-full max-w-[640px] min-h-screen text-white mx-auto bg-[linear-gradient(90deg,_#000000_40.82%,_#0E0E24_99.88%)] overflow-x-hidden">
            <div id="Header" className="flex items-center justify-between px-5 mt-[60px]">
                <div className="flex items-center gap-[14px] mr-3">
                    <div className="w-[60px] h-[60px] flex shrink-0 rounded-full overflow-hidden">
                        <img src={session?.photoUrl} className="w-full h-full object-cover" alt="avat/r" />
                    </div>
                    <div>
                        <p className="text-sm">Howdy,</p>
                        <p className="font-semibold">{session?.name}</p>
                    </div>
                </div>
                <button>
                    <img src="/images/icons/notification-bell.svg" className="w-12 h-12 flex shrink-0" alt="icon" />
                </button>
            </div>
            <div className="swiper-recommendations px-5">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true, dragSize: 175 }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) => {
                        console.log("slide change");
                        window.setTimeout(() => {
                            swiper.update();
                        }, 50);
                        // swiper.updateSlides();
                    }}
                    autoplay={{
                        delay: 200,
                        disableOnInteraction: true,
                    }}
                    initialSlide={1}
                    className="swiper-wrapper w-full overflow-hidden mt-5">
                    <SwiperSlide className="swiper-slide !w-fit">
                        <a href="details.html" className="card">
                            <div className="relative flex w-[300px] h-[200px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th1.png" className="w-full h-full object-cover" alt="thumbnail" />
                                <div className="absolute flex w-12 h-12 shrink-0 rounded-full bg-[#FFFFFF66] backdrop-blur-sm overflow-hidden m-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
                                    <img src="/images/icons/video-circle.svg" className="w-8 h-8 m-auto" alt="icon" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide !w-fit">
                        <a href="details.html" className="card">
                            <div className="relative flex w-[300px] h-[200px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th2.png" className="w-full h-full object-cover" alt="thumbnail" />
                                <div className="absolute flex w-12 h-12 shrink-0 rounded-full bg-[#FFFFFF66] backdrop-blur-sm overflow-hidden m-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
                                    <img src="/images/icons/video-circle.svg" className="w-8 h-8 m-auto" alt="icon" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide !w-fit">
                        <a href="details.html" className="card">
                            <div className="relative flex w-[300px] h-[200px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th3.png" className="w-full h-full object-cover" alt="thumbnail" />
                                <div className="absolute flex w-12 h-12 shrink-0 rounded-full bg-[#FFFFFF66] backdrop-blur-sm overflow-hidden m-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
                                    <img src="/images/icons/video-circle.svg" className="w-8 h-8 m-auto" alt="icon" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
            <form action="#" className="flex items-center gap-[10px] rounded-full py-[2px] pl-5 h-fit bg-[#FFFFFF1A] backdrop-blur-sm placeholder:text-white focus-within::ring-1 focus-within::ring-white transition-all duration-300 overflow-hidden mx-5 mt-5">
                <input type="text" className="appearance-none outline-none bg-transparent h-full w-full font-semibold placeholder:font-normal placeholder:text-white" placeholder="Search movie by name" />
                <button type="submit" className="w-12 h-12 flex shrink-0">
                    <img src="/images/icons/search-white-bg.svg" alt="icon" />
                </button>
            </form>
            <section id="Genre" className="flex flex-col gap-[10px] mt-5">
                <h2 className="font-semibold px-5">Browse Genre</h2>
                <div className="swiper-genre w-full overflow-hidden">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={"auto"}
                        slidesOffsetBefore={20}
                        slidesOffsetAfter={20} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] text-black bg-white font-semibold text-premiere-black text-sm">All</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Family</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Asian</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Horror</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Business</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Romance</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Action</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Commedy</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Documentary</div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit py-[1px]">
                            <a href="browse-genre.html" className="card">
                                <div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Sci-Fi</div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section id="New-Movies" className="flex flex-col gap-4 mt-5 px-5">
                <h2 className="font-semibold">All New Movies</h2>
                <a href="details.html" className="card">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[14px]">
                            <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th3.png" className="w-full h-full object-cover" alt="thumbnail" />
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <h3 className="font-semibold line-clamp-2">Despicable Mines 3</h3>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/video-vertical-grey.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Kids</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/location.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Jakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
                            <p className="font-semibold text-xs leading-[18px]">4/5</p>
                            <img src="/images/icons/Star 1.svg" className="w-4 h-4 flex shrink-0" alt="star" />
                        </div>
                    </div>
                </a>
                <a href="details.html" className="card">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[14px]">
                            <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th4.png" className="w-full h-full object-cover" alt="thumbnail" />
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <h3 className="font-semibold line-clamp-2">Power of Linear</h3>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/video-vertical-grey.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Horror</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/location.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Bandung</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
                            <p className="font-semibold text-xs leading-[18px]">4/5</p>
                            <img src="/images/icons/Star 1.svg" className="w-4 h-4 flex shrink-0" alt="star" />
                        </div>
                    </div>
                </a>
                <a href="details.html" className="card">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[14px]">
                            <div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
                                <img src="/images/thumbnails/th2.png" className="w-full h-full object-cover" alt="thumbnail" />
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <h3 className="font-semibold line-clamp-2">Avengers Kids</h3>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/video-vertical-grey.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Family</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/location.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
                                    <p className="text-sm text-premiere-grey">Denpasar</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
                            <p className="font-semibold text-xs leading-[18px]">4/5</p>
                            <img src="/images/icons/Star 1.svg" className="w-4 h-4 flex shrink-0" alt="star" />
                        </div>
                    </div>
                </a>
            </section>
            <section id="Coming-Soon" className="flex flex-col gap-4 mt-5">
                <h2 className="font-semibold px-5">Coming Soon</h2>
                <div className="swiper-coming w-full overflow-hidden px-5">
                    <Swiper spaceBetween={15} slidesPerView={"auto"} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                    <img src="/images/thumbnails/th5.png" className="w-full h-full object-cover" alt="thumbnail" />
                                    <div className="absolute w-full bottom-0 p-[14px] z-10">
                                        <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                                            <img src="/images/icons/video-vertical-white.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="text-sm">Business</p>
                                                <h3 className="font-semibold">Metaverse World</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </ SwiperSlide>
                        <SwiperSlide className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                    <img src="/images/thumbnails/th1.png" className="w-full h-full object-cover" alt="thumbnail" />
                                    <div className="absolute w-full bottom-0 p-[14px] z-10">
                                        <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                                            <img src="/images/icons/video-vertical-white.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="text-sm">Business</p>
                                                <h3 className="font-semibold">Metaverse World</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <div className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                    <img src="/images/thumbnails/th2.png" className="w-full h-full object-cover" alt="thumbnail" />
                                    <div className="absolute w-full bottom-0 p-[14px] z-10">
                                        <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                                            <img src="/images/icons/video-vertical-white.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="text-sm">Business</p>
                                                <h3 className="font-semibold">Metaverse World</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <SwiperSlide className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
                                    <img src="/images/thumbnails/th3.png" className="w-full h-full object-cover" alt="thumbnail" />
                                    <div className="absolute w-full bottom-0 p-[14px] z-10">
                                        <div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
                                            <img src="/images/icons/video-vertical-white.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="text-sm">Business</p>
                                                <h3 className="font-semibold">Metaverse World</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <div id="Bottom-Nav" className="relative w-full h-[123px] flex shrink-0">
                <nav className="fixed bottom-5 left-5 right-5 mx-auto flex items-center w-fit rounded-full p-[10px_14px] gap-[14px] bg-[#FFFFFF33] z-20 backdrop-blur-md">
                    <a href="discover.html" className="flex items-center shrink-0 rounded-3xl p-3 gap-3 w-12 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 bg-black invert !w-fit pr-4">
                        <img src="/images/icons/video-play.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <p className="font-semibold text-sm text-white">Discover</p>
                    </a>
                    <a href="my-tickets.html" className="flex items-center shrink-0 rounded-3xl p-3 gap-3 w-12 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 hover:invert hover:bg-black">
                        <img src="/images/icons/ticket-star.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <p className="font-semibold text-sm text-white">Tickets</p>
                    </a>
                    <a href="my-wallet.html" className="flex items-center shrink-0 rounded-3xl p-3 gap-3 w-12 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 hover:invert hover:bg-black">
                        <img src="/images/icons/cards.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <p className="font-semibold text-sm text-white">E-Wallet</p>
                    </a>
                    <a href="settings.html" className="flex items-center shrink-0 rounded-3xl p-3 gap-3 w-12 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 hover:invert hover:bg-black">
                        <img src="/images/icons/setting-2.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                        <p className="font-semibold text-sm text-white">Settings</p>
                    </a>
                </nav>
            </div>
        </div>
    )
}
