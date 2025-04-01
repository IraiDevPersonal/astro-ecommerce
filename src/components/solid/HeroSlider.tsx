import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "@/interfaces/product";

const HeroSlider = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "banner-pagination-bullet",
          bulletActiveClass: "banner-pagination-bullet-active",
          // el: ".swiper-pagination",
        }}
        navigation={{
          enabled: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="p-2">
            <div className="bg-surface flex h-full flex-col items-center overflow-hidden rounded-md border pb-4 md:rounded-xl">
              <picture className="h-max w-full">
                <img
                  className="h-96 w-full object-cover object-center lg:h-[542px]"
                  alt={item.title}
                  src={item.url}
                />
              </picture>

              <div className="text-text-primary">
                <div className="text-center">
                  <p className="font-medium md:text-xl">{item.description}</p>
                  <h2 className="text-center font-bold">{item.title}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;

// {
//   {
//     item.handle && (
//       <a
//         className="btn btn-sm md:btn-lg btn-primary font-medium"
//         href={`products/${item.handle}`}
//       >
//         Shop Now
//       </a>
//     );
//   }
// }
