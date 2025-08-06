import Button from '../ui/Button';

export default function LandCodeSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-[100px] "
      style={{
        backgroundImage: "url('/images/landSection.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* контент */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <h2 className="text-[48px] sm:text-[72px] md:text-[96px] font-inter font-semibold leading-[58px] sm:leading-[88px] md:leading-[117px] text-left text-global-10">
            Земельний кодекс України
          </h2>
          <div className="max-w-[90%]">
            <p className="text-[20px] sm:text-[24px] md:text-[26px] font-inter font-medium leading-[26px] sm:leading-[30px] md:leading-[34px] text-left text-global-10 mb-8">
              Отримайте актуальну редакцію Земельного кодексу України в зручному PDF-форматі. Ми
              зібрали все — структуровано, з розділами, без зайвого. Ідеально для юристів,
              забудовників, агрокомпаній та власників земельних ділянок.
            </p>
            <button className="text-[18px] font-inter font-semibold leading-[22px] text-left text-global-10 border border-white/30 rounded-[40px] px-5 py-4 bg-transparent hover:bg-white/10">
              Завантажити
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
