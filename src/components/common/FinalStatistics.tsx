'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(start: boolean, to: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percent = Math.min(progress / duration, 1);
      setCount(Math.floor(to * percent));
      if (percent < 1) {
        frame.current = requestAnimationFrame(step);
      }
    };

    frame.current = requestAnimationFrame(step);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      startTime.current = null;
    };
  }, [start, to, duration]);

  return count;
}

export default function FinalStatistics() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStart(entry.isIntersecting); // true, когда в зоне видимости
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const statistics = [
    { value: 450, label: 'Успішно реалізованих проєктів', suffix: '+' },
    { value: 95, label: 'Задоволених клієнтів', suffix: '%' },
    { value: 12, label: 'Років досвіду', suffix: '+' },
  ];

  return (
    <section className="w-full bg-global-15 py-[28px] px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="w-full container mx-auto">
        <div className="bg-global-13 rounded-[10px] p-6">
          <div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-global-2">
            {statistics.map((stat, index) => {
              const count = useCountUp(start, stat.value);

              return (
                <div key={index} className="flex-1 text-center py-4 sm:py-0 sm:px-8">
                  <p className="text-[24px] sm:text-[28px] md:text-[32px] font-inter font-normal leading-[30px] sm:leading-[35px] md:leading-[39px] text-center text-global-1 mb-2">
                    {count}
                    {stat.suffix}
                  </p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-global-3">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
