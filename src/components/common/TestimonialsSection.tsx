import Image from 'next/image';

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      text: 'Допомогли з оформленням ділянки під забудову: перевірили документи, підготували все до угоди. Працюють чітко й грамотно. Рекомендуємо.',
      author: 'Віктор Р.',
      role: 'Замовник',
      avatar: '/images/userPic1.webp',
    },
    {
      rating: 4,
      text: 'Продали через них комерційне приміщення. Від оцінки до підписання — усе без зволікань і зайвих питань. Професіонали.',
      author: 'Олена М.',
      role: 'Директор',
      avatar: '/images/userPic2.webp',
    },
    {
      rating: 4,
      text: 'Шукали землю для виробництва. Знайшли варіант, провели аудит, оформили під ключ. Надійна команда, з якою приємно працювати.',
      author: 'Вікторя С.',
      role: 'СЕО',
      avatar: '/images/userPic3.webp',
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-400'}>
        ★
      </span>
    ));

  return (
    <section id="reviews" className="w-full bg-global-15 py-[86px] px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-global-13 rounded-[16px] p-8 border border-transparent shadow-lg hover:border-[#b87333] transition-all duration-300"
            >
              <div className="flex gap-2 mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-[16px] font-inter font-normal leading-[24px] text-left text-global-1 mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-global-13 rounded-[5px] p-1 shadow-sm">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-[4px]"
                  />
                </div>
                <div className="w-[2px] h-[48px] bg-global-4"></div>
                <div>
                  <p className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-1">
                    {testimonial.author}
                  </p>
                  <p className="text-[10px] font-montserrat font-medium leading-[13px] text-left text-global-3">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
