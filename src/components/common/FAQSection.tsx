'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'Як перевірити земельну ділянку перед купівлею?',
      answer:
        'Щоб уникнути проблем із землею, ми проводимо повний аудит: перевіряємо цільове призначення, форму власності, кадастрову історію, обтяження, обмеження, доступ до комунікацій та можливість забудови.',
      isOpen: true,
    },
    {
      question: 'Чи можна змінити цільове призначення ділянки і скільки це займає часу?',
      answer:
        'Зміна цільового призначення можлива за певних умов. Процедура займає від 3 до 6 місяців залежно від складності випадку.',
      isOpen: false,
    },
    {
      question: 'Які документи потрібні для продажу комерційної нерухомості?',
      answer:
        'Для продажу потрібні: правовстановлюючі документи, технічний паспорт, довідка про відсутність заборгованості, згода співвласників.',
      isOpen: false,
    },
    {
      question: 'Що входить у підготовку бізнесу до продажу?',
      answer:
        'Підготовка включає: аудит фінансової звітності, оцінку активів, юридичну перевірку, підготовку документів, пошук покупців.',
      isOpen: false,
    },
    {
      question: 'Які дозволи потрібні для початку будівництва і як їх отримати?',
      answer:
        'Необхідні: дозвіл на будівництво, проектна документація, висновок експертизи, погодження з комунальними службами.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <section className="w-full bg-global-15 py-[50px] sm:py-[116px] px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <div className="mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[56px] md:leading-[66px] text-left text-global-1 mb-4">
            Часті запитання
          </h2>
          <p className="text-[18px] sm:text-[19px] md:text-[20px] font-manrope font-medium leading-[24px] sm:leading-[26px] md:leading-[28px] text-left text-global-2">
            Що запитують перед тим, як звернутись до нас?
          </p>
        </div>
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-manrope font-medium leading-[28px] sm:leading-[30px] md:leading-[33px] text-left text-global-1 pr-4">
                  {faq.question}
                </h3>
                <div className="w-[46px] h-[46px] bg-global-12 rounded-[22px] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={faq.isOpen ? '/images/img_lines.svg' : '/images/img_arrow_down.svg'}
                    alt={faq.isOpen ? 'collapse' : 'expand'}
                    width={20}
                    height={20}
                    className="transition-transform duration-200"
                  />
                </div>
              </button>
              {faq.isOpen && (
                <div className="pb-6">
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] font-manrope font-normal leading-[24px] sm:leading-[25px] md:leading-[27px] text-left text-global-2 max-w-[74%]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
