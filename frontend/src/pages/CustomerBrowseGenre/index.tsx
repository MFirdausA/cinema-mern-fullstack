import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SheetFilter from "./sheetFilter";
import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "@/services/global/global.service";
import { Item } from "@radix-ui/react-dropdown-menu";

export default function CustomerBrowseGenre() {
	const [show, setShowFilter] = useState<boolean>(false);

	const { genreId } = useParams();

	const { data, isLoading } = useQuery({
		queryKey: ["browse-movies", genreId],
		queryFn: () => getMoviesByGenre(genreId ?? "")
	})

	if (isLoading) {
		<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			Loading...
		</div>
	}

	return (
		<div id="Content-Container" className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto text-white bg-[linear-gradient(90deg,_#000000_40.82%,_#0E0E24_99.88%)] overflow-x-hidden">
			<div id="Top-Nav" className="relative flex items-center justify-between px-5 mt-[60px]">
				<Link to="/" className="w-12 h-12 flex shrink-0 items-center justify-center bg-[#FFFFFF1A] backdrop-blur-md rounded-full">
					<img src="/images/icons/arrow-left.svg" className="w-[22px] h-[22px] flex shrink-0" alt="" />
				</Link>
				<p className="text-center mx-auto font-semibold text-sm">Asian Genre</p>
				<div className="dummy-button w-12"></div>
			</div>
			<section className="flex items-center gap-3 flex-wrap px-5 mt-5">
				<p className="font-semibold">Filters</p>
				<Link to="browse-genre.html" className="card">
					<div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Asian</div>
				</Link>
				<Link to="browse-genre.html" className="card">
					<div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">Jakarta</div>
				</Link>
				<Link to="browse-genre.html" className="card">
					<div className="flex rounded-full p-[12px_14px] bg-[#FFFFFF1A] font-semibold text-sm hover:ring-1 hover:ring-white transition-all duration-300">XXI Premiere</div>
				</Link>
			</section>
			<section id="Popular" className="flex flex-col gap-4 mt-5">
				<h2 className="font-semibold px-5">Popular Movies in Asian</h2>
				<div className="swiper-popular w-full overflow-hidden px-5">
					<Swiper
						spaceBetween={15}
						slidesPerView={"auto"}
						// centeredSlides={true}
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
						initialSlide={0}
						className="swiper-wrapper">
						{data?.data.filteredMovies.map((item) => (
							<SwiperSlide className="swiper-slide !w-fit">
								<Link to="details.html" className="card">
									<div className="relative flex w-[240px] h-[300px] shrink-0 rounded-3xl bg-[#D9D9D9] overflow-hidden">
										<img src={item.thumbnailUrl} className="w-full h-full object-cover" alt="thumbnail" />
										<div className="absolute w-full bottom-0 p-[14px] z-10">
											<div className="flex items-center w-full rounded-[20px] p-[14px] gap-3 bg-[#FFFFFF33] backdrop-blur-md verflow-hidden">
												<img src="/images/icons/video-vertical-white.svg" className="w-8 h-8 flex shrink-0" alt="icon" />
												<div className="flex flex-col gap-[2px]">
													<p className="text-sm">{item.genre.name}</p>
													<h3 className="font-semibold">{item.title}</h3>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
			<section id="New-Movies" className="flex flex-col gap-4 mt-5 px-5">
				<h2 className="font-semibold">All New Movies</h2>
				{data?.data.allMovies.map((Item) => (
					<Link to={`/movie/${Item._id}`} key={Item._id} className="card">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-[14px]">
								<div className="w-[100px] h-[110px] flex shrink-0 rounded-2xl bg-[#D9D9D9] overflow-hidden">
									<img src={Item.thumbnailUrl} className="w-full h-full object-cover" alt="thumbnail" />
								</div>
								<div className="flex flex-col gap-[6px]">
									<h3 className="font-semibold line-clamp-2">{Item.title}</h3>
									<div className="flex items-center gap-2">
										<img src="/images/icons/video-vertical-grey.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
										<p className="text-sm text-premiere-grey">{Item.genre.name}</p>
									</div>
									<div className="flex items-center gap-2">
										<img src="/images/icons/location.svg" className="w-[18px] h-[18px] flex shrink-0" alt="icon" />
										<p className="text-sm text-premiere-grey">{Item.theaters[0].city}</p>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-[2px] rounded-full p-[8px_10px] bg-[#FFFFFF1A]">
								<p className="font-semibold text-xs leading-[18px]">4/5</p>
								<img src="/images/icons/Star 1.svg" className="w-4 h-4 flex shrink-0" alt="star" />
							</div>
						</div>
					</Link>
				))}
			</section>
			<div id="Bottom-Nav" className="relative w-full h-[123px] flex shrink-0">
				<button
					onClick={() => {
						setShowFilter(true);

						const body = document.getElementsByTagName("body")[0]
						body.classList.toggle("overflow-hidden");
					}}
					type="button" className="fixed bottom-5 left-5 right-5 flex items-center shrink-0 rounded-3xl p-3 gap-3 h-12 bg-[#FFFFFF33] overflow-hidden transition-all duration-300 bg-black invert w-fit pr-4 mx-auto">
					<img src="/images/icons/video-vertical-white.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
					<p className="font-semibold text-sm text-white">Filter Movies</p>
				</button>
			</div>
			<SheetFilter onCancel={() => setShowFilter(false)} setShow={() => setShowFilter(true)} show={show} />
		</div>
	);
}

