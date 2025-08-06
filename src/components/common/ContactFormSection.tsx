'use client';

import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка формы:', formData);
    // Здесь логика отправки данных
  };

  return (
    <div className="w-full bg-global-11 py-[40px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1204px] mx-auto">
        <div className="mb-8">
          <h2 className="text-[16px] sm:text-[17px] md:text-[18px] font-montserrat font-semibold leading-[20px] sm:leading-[21px] md:leading-[22px] text-left text-global-5 mb-4">
            Індивідуальний підбір
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-montserrat font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-left text-global-5">
            Надішліть заявку на індивідуальний підбір нерухомості, щоб наш менеджер якнайшвидше з
            вами зв'язався!
          </p>
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-7">
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="flex-1 rounded-[8px] border border-global-4 px-4 py-3 font-inter text-[14px] focus:outline-none focus:border-button-1"
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="flex-1 rounded-[8px] border border-global-4 px-4 py-3 font-inter text-[14px] focus:outline-none focus:border-button-1"
          />
          <textarea
            placeholder="Ваш коментар"
            value={formData.comment}
            onChange={(e) => setFormData((prev) => ({ ...prev, comment: e.target.value }))}
            className="flex-1 rounded-[8px] border border-global-4 px-4 py-3 font-inter text-[14px] resize-none focus:outline-none focus:border-button-1"
          />
          <button
            type="submit"
            className="bg-button-1 text-[16px] font-montserrat font-semibold leading-[20px] text-center text-global-10 rounded-[22px] px-8 py-3 sm:px-[34px] sm:py-3 shadow-[0px_4px_15px_#303b5726] animate-pulse-custom"
          >
            Відправити заявку
          </button>
        </form>
      </div>
      <style jsx global>{`
        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 102, 0, 0.6);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 102, 0, 0.6);
          }
        }
        .animate-pulse-custom {
          animation: pulse-scale 1.8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
