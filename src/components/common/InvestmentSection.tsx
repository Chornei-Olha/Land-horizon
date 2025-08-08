import Image from 'next/image';

export default function InvestmentSection() {
  return (
    <section className="container mx-auto py-[50px] sm:py-[86px] px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
        {/* Заголовок */}
        <div>
          <h2 className="max-w-7xl text-[32px] sm:text-[40px] md:text-[48px] font-manrope font-medium leading-[38px] sm:leading-[48px] md:leading-[57px] text-left text-global-1 mb-8">
            Ми знаємо, як перетворити землю, бізнес або нерухомість на вигідну інвестицію.
          </h2>
        </div>

        {/* Блок с изображением и описанием */}
        <div className="flex flex-col lg:flex-row">
          <Image
            src="/images/house.webp"
            alt="architecture"
            width={576}
            height={500}
            className="w-full lg:w-[48%] rounded-t-[16px] lg:rounded-l-[16px] lg:rounded-tr-none lg:rounded-br-none"
          />
          <div className="flex-1 p-6 lg:p-8 bg-global-12 rounded-b-[16px] lg:rounded-r-[16px] lg:rounded-bl-none">
            <h3 className="text-[20px] font-manrope font-medium leading-[36px] text-left text-global-1 mb-6">
              Ми допомагаємо бізнесу, інвесторам і забудовникам працювати із землею, нерухомістю,
              будівництвом і готовими активами — швидко, законно й без ризиків.
            </h3>
            <div className="text-[15px] font-manrope font-medium leading-[27px] text-left text-global-2 mb-8">
              <span className="text-global-1">Шукаєте землю під забудову?</span> <br />
              Знайдемо, перевіримо, оформимо.
              <br />
              <br />
              <span className="text-global-1">
                Потрібен склад, цех, торгова площа чи логістика?
              </span>{' '}
              <br />
              Підберемо об'єкт і проведемо угоду.
              <br /> <br />
              <span className="text-global-1">Є готовий бізнес на продаж?</span> <br />
              Допоможемо знайти покупця й оформити все правильно.
              <br />
              <br />
              Ми працюємо з аналітикою, перевіркою документів і повною підтримкою — від першого
              запиту до моменту передачі прав. Усе, що стосується землі, нерухомості та об'єктів під
              бізнес — це наша спеціалізація.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
