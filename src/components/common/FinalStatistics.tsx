export default function FinalStatistics() {
  const statistics = [
    { value: '450+', label: 'Успішно реалізованих проєктів' },
    { value: '95%', label: 'Задоволених клієнтів' },
    { value: '12+', label: 'Років досвіду' },
  ];

  return (
    <section className="w-full bg-global-15 py-[28px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1204px] mx-auto">
        <div className="bg-global-13 rounded-[10px] p-6">
          <div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-global-2">
            {statistics.map((stat, index) => (
              <div key={index} className="flex-1 text-center py-4 sm:py-0 sm:px-8">
                <p className="text-[24px] sm:text-[28px] md:text-[32px] font-inter font-normal leading-[30px] sm:leading-[35px] md:leading-[39px] text-center text-global-1 mb-2">
                  {stat.value}
                </p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] text-center text-global-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
