import { IoLocationOutline } from "react-icons/io5";

const Header = () => {

  return (
    <>
      <div className="w-full h-[500px] flex justify-center">
        <div className="w-full h-[30px] flex items-center bg-gray-200">
          <div className="w-5/6 h-[30px] mx-auto flex items-center justify-between">
            {/* left side */}
            <div className="w-[400px] h-[30px] flex items-center">
              <IoLocationOutline size={"20px"} className="mr-[5px]" />
              <p className="text-[14px] cursor-pointer text-[#4D4F59]">
                Город:{" "}
                <span className="underline text-[14px] text-black font-medium">
                  Самарканд
                </span>
              </p>
              <p className="ml-[20px] text-[14px] font-semibold cursor-pointer">
                Пункт выдачи
              </p>
            </div>

            {/* right side */}
            <div className="w-[500px] flex items-center">
              <a
                href="#"
                className="text-violet-600 text-[14px] mr-[15px] font-medium"
              >
                Продавайте на Uzum
              </a>
              <a
                href="#"
                className="text-[#4D4F59] text-[14px] mr-[15px] font-medium"
              >
                Вопрос-ответ
              </a>
              <a href="#" className="text-[#4D4F59] text-[14xpx] font-medium">
                Мои заказы
              </a>
                <p className='ml-[15px] text-[14px] text-black font-medium'>Русский</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;