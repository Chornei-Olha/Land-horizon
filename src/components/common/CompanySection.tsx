'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// 🔁 Кастомный хук анимации чисел
function useCountUp(to: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const frame = useRef(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!start.current) start.current = timestamp;
      const progress = timestamp - start.current;
      const percent = Math.min(progress / duration, 1);
      setCount(Math.floor(to * percent));
      if (percent < 1) {
        frame.current = requestAnimationFrame(step);
      }
    };

    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [to, duration]);

  return count;
}

export default function CompanySection() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const statistics = [
    {
      number: 2011,
      suffix: '',
      title: 'рік заснування компанії',
      description: 'Ми розвиваємо ринок нерухомості понад десятиліття.',
      image: '/images/rounds1.webp',
    },
    {
      number: 12,
      suffix: '+',
      title: 'років досвіду',
      description: 'Наші кейси — це стабільність, масштаб і довіра клієнтів.',
      image: '/images/rounds3.webp',
    },
    {
      number: 450,
      suffix: '+',
      title: 'реалізованих проєктів',
      description: 'Від ділянок до логістичних парків — ми доводимо до результату.',
      image: '/images/rounds2.webp',
    },
    {
      number: 180,
      suffix: '+',
      title: 'постійних клієнтів',
      description: 'Девелопери, агрохолдинги, бізнеси, приватні інвестори',
      image: '/images/rounds4.webp',
    },
  ];

  return (
    <>
      {/* Company Description */}
      <div className="container bg-global-15 py-[50px] sm:py-[70px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mr-auto">
          <p className="text-[20px] sm:text-[24px] md:text-[30px] font-inter font-semibold leading-[28px] sm:leading-[34px] md:leading-[42px] text-left text-global-4 w-full sm:w-[90%] md:w-[74%]">
            Ми — аналітичне агентство повного циклу, яке спеціалізується на високостратегічних
            угодах із землею, промисловими об'єктами, комерційною нерухомістю та готовим бізнесом.
            Наш підхід — це не просто підбір об'єкта за параметрами. Ми аналізуємо його історію,
            правовий статус, інвестиційну привабливість, майбутню ліквідність і потенціал розвитку.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="container mx-auto bg-global-15 pb-[50px] sm:pb-[70px] px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 lg:gap-[30px]">
          {statistics.map((stat, index) => {
            const count = useCountUp(start ? stat.number : 0);

            return (
              <div
                key={index}
                className={`relative flex flex-col items-start bg-white/5 rounded-lg p-6 pt-4 ${
                  index === 1 || index === 3 ? 'lg:mt-[150px]' : ''
                }`}
              >
                {/* Number */}
                <h3 className="text-[48px] sm:text-[60px] md:text-[72px] font-inter font-semibold leading-tight text-global-4">
                  {count}
                  {stat.suffix}
                </h3>

                {/* Title & Description */}
                <div className="mt-2">
                  <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-inter font-medium leading-snug text-global-4">
                    {stat.title}
                  </h4>
                  <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] font-inter font-medium text-global-9">
                    {stat.description}
                  </p>
                </div>

                {/* Image + Arrow */}
                {stat.image && (
                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      src={stat.image}
                      alt="statistic illustration"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                    <Image
                      src="/images/arrow.webp"
                      alt="arrow"
                      width={205}
                      height={80}
                      className="hidden lg:block"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
