'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '../components/common/HeroSection';
import CompanySection from '../components/common/CompanySection';
import AboutSection from '../components/common/AboutSection';
import ServicesSection from '../components/common/ServicesSection';
import LandCodeSection from '../components/common/LandCodeSection';
import InvestmentSection from '../components/common/InvestmentSection';
import TestimonialsSection from '../components/common/TestimonialsSection';
import FinalStatistics from '../components/common/FinalStatistics';
import FAQSection from '../components/common/FAQSection';
import ContactFormSection from '../components/common/ContactFormSection';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Image
        key={i}
        src="/images/img_svg.svg"
        alt="star"
        width={16}
        height={16}
        className={i < rating ? 'opacity-100' : 'opacity-30'}
      />
    ));
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      {/* Chat Widget */}
      <div className="hidden sm:block fixed bottom-20 right-4 sm:right-8 z-40">
        <Image
          src="/images/img_iframe.svg"
          alt="chat"
          width={70}
          height={70}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-start items-center w-full">
        <HeroSection />

        <CompanySection />

        <AboutSection />

        <ServicesSection />

        <LandCodeSection />

        <InvestmentSection />

        <TestimonialsSection />

        <FinalStatistics />

        <FAQSection />

        <ContactFormSection />

        <Footer />
        {/* Vertical Line Decoration */}
        {/* <div className="fixed right-[358px] top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col items-center">
          <div className="w-[1px] h-[1904px] bg-global-16"></div>
          <Image src="/images/img_svg1251371089_359.svg" alt="decoration" width={6} height={20} />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
