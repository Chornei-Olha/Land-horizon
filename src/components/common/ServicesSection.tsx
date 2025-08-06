'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';

interface ServicesSectionProps {
  serviceCategories: string[];
}

export default function ServicesSection({ serviceCategories }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(serviceCategories[0]);

  return (
    <div className="w-full">
      {/* Service Categories */}
      <div className="w-full bg-global-15 py-[40px] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1204px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(category)}
                className={`px-4 sm:px-6 md:px-8 py-3 rounded-[24px] text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center transition-all duration-200 shadow-[0px_3px_1px_#ffffff] ${
                  activeTab === category
                    ? 'bg-button-1 text-global-10'
                    : 'bg-global-13 text-global-1 hover:bg-global-12'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-[80px] px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="w-full max-w-[1204px] mx-auto">
          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[30px]">
            {/* Service 1 */}
            <div className="flex flex-col gap-6">
              <div className="relative bg-black bg-opacity-45 rounded-[10px] p-5">
                <div className="absolute top-4 right-4">
                  <div className="w-[44px] h-[44px] bg-global-12 rounded-full flex items-center justify-center">
                    <Image src="/images/img_icon.svg" alt="icon" width={44} height={44} />
                  </div>
                </div>
                <div className="pt-[274px]">
                  <Image
                    src="/images/img_container.svg"
                    alt="container"
                    width={238}
                    height={152}
                    className="mb-4"
                  />
                  <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-10">
                    Оформлення, зміна цільового призначення, розподіл, об'єднання, аудит правового
                    статусу. Працюємо з усіма формами власності. Повний супровід до результату.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9 mb-2">
                  Paris, France
                </p>
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9">
                  2019
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col gap-6">
              <Image
                src="/images/img_wzbchnkcv4gxhsv.png"
                alt="service 2"
                width={432}
                height={624}
                className="w-full rounded-[10px]"
              />
              <div className="text-center">
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9 mb-2">
                  Madrid, Spain
                </p>
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9">
                  2021
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col gap-6">
              <Image
                src="/images/img_6vpaccqjbr6q7c0.png"
                alt="service 3"
                width={432}
                height={578}
                className="w-full rounded-[10px]"
              />
              <div className="text-center">
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9 mb-2">
                  Amsterdam, Netherlands
                </p>
                <p className="text-[16px] font-inter font-medium leading-[22px] text-left text-global-9">
                  2023
                </p>
              </div>
            </div>
          </div>

          {/* Service Titles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-[30px] mt-8">
            {[
              'Земля та земельне право',
              'Комерційна нерухомість',
              'Промислова нерухомість',
              'Промислова нерухомість',
              'Продаж/придбання бізнесу',
              'Будівництво',
              'Комерційна нерухомість',
            ].map((title, i) => (
              <div key={i}>
                <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-inter font-semibold leading-[30px] sm:leading-[34px] md:leading-[37px] text-left text-global-10 mb-4">
                  {title}
                </h3>
                <Button className="bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] text-[14px] font-montserrat font-semibold leading-[18px] text-center text-global-10 shadow-[0px_0px_10px_#00000019] rounded-[20px] px-4 py-2">
                  Надіслати запит
                </Button>
              </div>
            ))}
          </div>

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
