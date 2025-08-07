'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function ServicesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const serviceCategories = [
    'Земля та земельне право',
    'Комерційна нерухомість',
    'Промислова нерухомість',
    'Продаж/придбання бізнесу',
    'Будівництво',
  ];

  const services = [
    {
      image: '/images/example.png',
      title: 'Земля та земельне право',
      description:
        "Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового статусу. Працюємо з усіма формами власності. Повний супровід до результату.",
      icon: '/images/img_icon.svg',
    },
    {
      image: '/images/example.png',
      title: 'Комерційна нерухомість',
      description:
        "Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового статусу. Працюємо з усіма формами власності. Повний супровід до результату.",
      icon: '/images/img_icon.svg',
    },
    {
      image: '/images/example.png',
      title: 'Промислова нерухомість',
      description:
        "Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового статусу. Працюємо з усіма формами власності. Повний супровід до результату.",
      icon: '/images/img_icon.svg',
    },
    {
      image: '/images/example.png',
      title: 'Продаж/придбання бізнесу',
      description:
        "Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового статусу. Працюємо з усіма формами власності. Повний супровід до результату.",
      icon: '/images/img_icon.svg',
    },
    {
      image: '/images/example.png',
      title: 'Будівництво',
      description:
        "Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового статусу. Працюємо з усіма формами власності. Повний супровід до результату.",
      icon: '/images/img_icon.svg',
    },
  ];

  return (
    <div id="services" className="w-full">
      {/* Service Categories */}
      <div className="relative w-full bg-white py-[50px] px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Маски по краям */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white to-transparent"></div>

        {/* Бесконечный скролл */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {[...serviceCategories, ...serviceCategories].map((category, index) => (
              <div
                key={index}
                className="min-w-[160px] px-5 py-3 rounded-[30px] bg-white/60 shadow-[0_2px_6px_rgba(0,0,0,0.04)] border border-gray-200 text-center transition-transform duration-300 backdrop-blur-md hover:scale-[1.02]"
              >
                <p className="text-[15px] font-inter text-gray-600">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="w-full bg-[#000] py-[50px] px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full container mx-auto">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[56px] md:leading-[66px] text-left text-global-10 mb-4">
            Послуги
          </h2>

          {/* Навигационные кнопки Swiper — вынесены за пределы карточек */}
          <button
            ref={prevRef}
            className="absolute top-1/2 left-20 z-20 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-300 text-orange-300 hover:bg-[#a96f44] hover:text-black transition"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 right-20 z-20 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-300 text-orange-300 hover:bg-[#a96f44] hover:text-black transition"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Service Cards */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              // Инициализация навигации с рефами кнопок
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            className="group"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-6">
                  {/* Карточка с hover */}
                  <div className="relative overflow-hidden rounded-[10px] group/card cursor-pointer">
                    {/* Фото с эффектом масштабирования */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={432}
                      height={400}
                      className="w-full transition-transform duration-300 ease-in-out group-hover/card:scale-105"
                    />

                    {/* Затемнение фона при наведении */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 group-hover/card:bg-opacity-60" />

                    {/* Иконка поверх — по умолчанию видимая, исчезает при hover */}
                    <div className="absolute top-4 right-4 z-10 transition-opacity duration-300 group-hover/card:opacity-0">
                      <div className="w-[44px] h-[44px] bg-global-12 rounded-full flex items-center justify-center">
                        <Image src={service.icon} alt="icon" width={24} height={24} />
                      </div>
                    </div>

                    {/* Текст появляется при hover */}
                    {service.description && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 px-4 text-center">
                        <p className="text-[16px] font-inter font-medium text-global-10 bg-global-4 p-7 rounded-lg border-2 border-orange-300">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Заголовок и кнопка */}
                  <div className="text-center">
                    <h3 className="text-center text-[24px] sm:text-[28px] md:text-[30px] font-inter font-semibold text-global-10 mb-4">
                      {service.title}
                    </h3>
                    <button
                      onClick={() => {
                        const el = document.getElementById('application');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] text-[16px] font-montserrat font-semibold leading-[20px] text-center text-global-10 rounded-[30px] px-8 py-3 sm:px-[34px] sm:py-3 shadow-[0px_4px_15px_#303b5726] hover:animate-pulse-custom"
                    >
                      Надіслати запит
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Service Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: '/images/img_vector_light_green_300.svg',
                text: "Професійна команда експертів на ринку преміальних об'єктів",
              },
              {
                icon: '/images/img_vector_light_green_300_50x50.svg',
                text: "Ефективно продаємо та здаємо в оренду об'єкти нерухомості",
              },
              {
                icon: '/images/img_vector_50x50.svg',
                text: 'Повний юридичний супровід угод',
              },
              {
                icon: '/images/img_vector_1.svg',
                text: 'Заощаджуємо ваш час у питаннях нерухомості',
              },
            ].map((feature, i) => (
              <div className="flex flex-col items-center text-center" key={i}>
                <div className="w-[50px] h-[50px] mb-8">
                  <Image src={feature.icon} alt={`feature-${i}`} width={50} height={50} />
                </div>
                <p className="text-[16px] font-montserrat font-normal leading-[19px] text-center text-global-10">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
