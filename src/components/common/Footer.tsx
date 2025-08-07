'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacts" className="w-full bg-global-11 py-[64px] px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-montserrat font-semibold leading-[20px] sm:leading-[21px] md:leading-[22px] text-global-5 mb-6">
              ЗЕМЕЛЬНИЙ ГОРИЗОНТ
            </h3>
            <div className="space-y-5">
              {[
                { href: '#about', text: 'Про нас' },
                { href: '#services', text: 'Послуги' },
                { href: '#reviews', text: 'Відгуки' },
                { href: '#land-code', text: 'Земельний кодекс' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image src="/images/img_arrow_right.svg" alt="arrow" width={12} height={12} />
                  <a
                    href={item.href}
                    className="text-[16px] font-montserrat font-normal leading-[20px] text-global-5 hover:text-button-1 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left sm:text-center col-span-1 sm:col-span-2">
            <p className="text-[32px] sm:text-[36px] md:text-[42px] font-abel font-normal leading-[40px] sm:leading-[46px] md:leading-[54px] text-global-8 mb-4">
              +38 (067) 000 00 00
            </p>
            <p className="text-[18px] sm:text-[19px] md:text-[20px] font-actor font-normal leading-[22px] sm:leading-[24px] md:leading-[25px] text-global-7 mb-8">
              Офіс: м.Київ, вул. Волинська, 67
            </p>
            <p className="text-[48px] sm:text-[60px] md:text-[70px] break-words font-actor font-normal leading-[60px] sm:leading-[72px] md:leading-[106px] text-global-8">
              info@loremipsum.ua
            </p>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-col items-start lg:items-end col-span-1">
            <div className="mb-8">
              <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-montserrat font-semibold leading-[20px] sm:leading-[21px] md:leading-[22px] text-global-5 mb-5">
                Завжди на зв'язку
              </h3>
              <div className="flex items-center gap-6 mb-6">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/img_fb_capital_svg.svg"
                    alt="facebook"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/img_inst_capital_svg.svg"
                    alt="instagram"
                    width={28}
                    height={28}
                  />
                </a>
                <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/img_group.png" alt="tiktok" width={28} height={28} />
                </a>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <a href="tel:+380731607382" className="flex items-center">
                  <Image src="/images/img_margin.svg" alt="phone" width={42} height={30} />
                  <p className="text-[16px] font-montserrat font-normal leading-[20px] text-global-5 ml-2">
                    +380 73 160 73 82
                  </p>
                </a>
              </div>

              <button className="bg-button-1 text-[16px] font-montserrat font-semibold leading-[20px] text-center text-global-10 shadow-[0px_4px_15px_#303b5726] rounded-[20px] px-[30px] py-[10px] w-full hover:bg-button-2 transition-colors duration-200">
                Зателефонуйте мені
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
