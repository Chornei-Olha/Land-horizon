// components/AboutSection.tsx
import Image from 'next/image';
import Button from '../ui/Button';

interface StatItemProps {
  image: string;
  value: string;
  label: string;
}

export default function AboutSection() {
  return (
    <div className="w-full relative">
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between py-[56px]">
          <div className="w-[36%] h-[2px] bg-global-7"></div>
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-montserrat font-bold leading-[25px] sm:leading-[28px] md:leading-[30px] text-center uppercase text-global-6 px-4">
            про нас
          </h2>
          <div className="w-[36%] h-[2px] bg-global-7"></div>
        </div>

        {/* About Content */}
        {/* About Content */}
        <div className="relative">
          <div className="w-full bg-global-6 rounded-[20px] p-8 sm:p-12 md:p-16 lg:p-0 h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[20px]"
              style={{ backgroundImage: "url('/images/img_pngwing_1.png')" }}
            ></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 h-full items-center">
              {/* Company Info */}
              <div className="flex flex-col items-center lg:items-start text-left col-span-1 sm:col-span-1 lg:col-span-2 pl-16">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  width={150}
                  height={150}
                  className="mb-4 self-center"
                />
                <p className="text-[11px] font-montserrat font-normal leading-[14px] text-global-10 mb-6">
                  Земельний Горизонт — це команда експертів, які мислять масштабно і діють точно. Ми
                  створюємо й супроводжуємо угоди з нерухомістю, які змінюють ландшафти: економічні,
                  юридичні, інфраструктурні. Працюємо з приватним капіталом, девелоперами,
                  агросектором, міжнародними фондами. Наша головна спеціалізація — земля, промислові
                  об'єкти, бізнес-активи і складні транзакції.
                </p>
                <button className="bg-[linear-gradient(270deg,#efdc97_0%,_#a96f44_100%)] text-[14px] font-montserrat font-semibold leading-[18px] text-global-10 shadow-[0px_0px_10px_#00000019] rounded-3xl px-6 py-4 self-start">
                  Залишити заявку
                </button>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 col-span-1 sm:col-span-1 lg:col-span-2 gap-8">
                <div className="space-y-8">
                  <StatItem image="/images/img_office.png" value="12" label="років на ринку" />
                  <StatItem image="/images/img_hand.png" value="$120+" label="загальна сума угод" />
                  <StatItem
                    image="/images/img_money.png"
                    value="450+"
                    label="реалізованих об'єктів"
                  />
                </div>
                <div className="space-y-8">
                  <StatItem image="/images/img_country.png" value="3" label="регіони присутності" />
                  <StatItem image="/images/img_people.png" value="500+" label="Брокерів" />
                  <StatItem
                    image="/images/img_rent.png"
                    value="180+"
                    label="постійних корпоративних клієнтів"
                  />
                </div>
              </div>

              {/* CEO Info */}
              <div className="col-span-1 sm:col-span-1 lg:col-span-2 flex justify-end h-full items-end pr-16">
                <Image
                  src="/images/ceo.webp"
                  alt="ceo"
                  width={330}
                  height={493}
                  className="w-[auto] h-[full]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center py-[70px] px-4 sm:px-6 lg:px-8">
          <p className="text-[24px] sm:text-[28px] md:text-[30px] font-inter font-semibold leading-[32px] sm:leading-[38px] md:leading-[42px] text-center text-global-4">
            Кожен наш проєкт — це обґрунтована, юридично безпечна та економічно доцільна операція,
            яка враховує довгострокові інтереси клієнта.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ image, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-4 py-6">
      <Image src={image} alt={label} width={76} height={47} />
      <div>
        <p className="text-[17px] font-montserrat font-bold leading-[21px] text-left text-global-10 mb-2">
          {value}
        </p>
        <p className="text-[12px] font-montserrat font-normal leading-[18px] text-left text-global-10">
          {label}
        </p>
      </div>
    </div>
  );
}
