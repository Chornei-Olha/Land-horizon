import Image from 'next/image';
import Header from './Header';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.webp')",
        }}
      >
        <div className="container mx-auto">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Logo */}
          <Link
            href="/"
            className="absolute top-[26px] left-4 sm:left-8 flex flex-col items-center z-20"
          >
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={108}
              height={114}
              className="w-[54px] h-[57px] sm:w-[80px] sm:h-[85px] md:w-[108px] md:h-[114px]"
            />
          </Link>

          {/* Header */}
          <Header className="absolute top-0 left-0 right-0 z-20" />
          {/* Hero Content */}
          <div className="h-full absolute inset-0 lg:inset-auto lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-1/2 grid items-center justify-center bg-white/30 backdrop-blur-[10px] z-10">
            <div className="text-center p-8 lg:p-10">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-montserrat font-bold leading-[34px] sm:leading-[44px] md:leading-[58px] lg:leading-[69px] text-center text-global-10 mb-4">
                Територія рішень
              </h1>
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-montserrat font-medium leading-[34px] sm:leading-[44px] md:leading-[58px] lg:leading-[69px] text-center text-global-10 mb-6">
                Земля. Бізнес. Майбутнє.
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-montserrat font-regular leading-[20px] sm:leading-[22px] md:leading-[25px] text-center text-global-10 mb-8 max-w-[65%] mx-auto">
                Професійний супровід стратегічної нерухомості — від земельних ділянок до готових
                підприємств.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('application');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] text-[16px] font-montserrat font-semibold leading-[20px] text-center text-global-10 rounded-[30px] px-8 py-3 sm:px-[34px] sm:py-3 shadow-[0px_4px_15px_#303b5726] animate-pulse-custom"
              >
                Залишити заявку
              </button>
            </div>
          </div>
          {/* Social Media Sidebar */}
          <div className="absolute left-[36px] top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-[46px] bg-global-8 rounded-[36px] px-[28px] py-[36px] z-20">
            {[
              { text: 'TWITTER', href: 'https://twitter.com/yourprofile' },
              { text: 'FACEBOOK', href: 'https://facebook.com/yourprofile' },
              { text: 'INSTAGRAM', href: 'https://instagram.com/yourprofile' },
            ].map(({ text, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-krona-one font-normal leading-[15px] text-center text-global-10 hover:underline"
                style={{ writingMode: 'vertical-rl' }}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
