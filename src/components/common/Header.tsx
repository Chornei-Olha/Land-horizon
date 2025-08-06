'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Про нас', href: '#about' },
    { label: 'Послуги', href: '#services' },
    { label: 'Земельний кодекс', href: '#land-code' },
    { label: 'Відгуки', href: '#reviews' },
    { label: 'Контакти', href: '#contacts' },
    { label: 'Заявка', href: '#application' },
  ];

  return (
    <header className={`container mx-auto w-full ${className}`}>
      <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
        <div className="flex justify-center items-center w-full">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex w-[65%] justify-between items-center bg-global-15 border-global-17 border-[1px] rounded-[84px] p-4">
            <div className="flex justify-between items-center w-[20%]">
              <button className="text-[14px] font-montserrat font-bold leading-[18px] text-center text-global-10 bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] shadow-[0px_0px_10px_#00000019] rounded-[20px] p-[13px]">
                Головна
              </button>
              {navigationItems.slice(0, 1).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[14px] font-inter font-bold leading-[17px] text-center text-global-8 hover:text-button-1 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {navigationItems.slice(1).map((item, index) => (
              <a
                key={index + 1}
                href={item.href}
                className="text-[14px] font-inter font-bold leading-[17px] text-center text-global-8 hover:text-button-1 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button (всегда сверху) */}
          <button
            className="block lg:hidden absolute right-[50px] p-2 bg-transparent border-[1px] rounded-full z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Крестик
              <svg
                className="w-6 h-6 text-global-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Бургер
              <svg
                className="w-6 h-6 text-global-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Navigation */}
          <nav
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden w-full bg-global-15 rounded-5 shadow-lg z-40`}
          >
            <div className="flex flex-col p-4 space-y-4">
              <Button className="text-[14px] font-montserrat font-bold leading-[18px] text-center text-global-10 bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] shadow-[0px_0px_10px_#00000019] rounded-5 p-[11px] w-full">
                Головна
              </Button>
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[14px] font-inter font-bold leading-[17px] text-center text-global-8 hover:text-button-1 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
