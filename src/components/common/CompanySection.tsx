import Image from 'next/image';

interface Statistic {
  number: string | number;
  title: string;
  description: string;
  image: string;
}

interface CompanySectionProps {
  statistics: Statistic[];
}

export default function CompanySection({ statistics }: CompanySectionProps) {
  return (
    <>
      {/* Company Description */}
      <div className="container bg-global-15 py-[70px] px-4 sm:px-6 lg:px-8">
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
      <div className="container  mx-auto bg-global-15 pb-[70px] px-4 sm:px-6 lg:px-8">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[30px]">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-start bg-white/5 rounded-lg p-6 pt-4 ${
                  // Сдвиг вниз только для 12+ (index 1) и 180+ (index 3)
                  index === 1 || index === 3 ? 'lg:mt-[150px]' : ''
                }`}
              >
                {/* Number */}
                <h3 className="text-[48px] sm:text-[60px] md:text-[72px] font-inter font-semibold leading-tight text-global-4">
                  {stat.number}
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

                {/* Image + Arrow on one line */}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
