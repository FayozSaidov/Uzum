import React, { useState } from "react";

export default function ProductPage() {
  
  const [counter, setCounter] = useState(0)

  const increaseCounter = () =>{
    setCounter(counter + 1)
  }
  const decreaseCounter = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className="w-5/6 mx-auto h-[600px] mt-[300px] flex justify-between">
        {/* left side */}
        <div className="w-[500px] h-[500px] bg-red-500"></div>

        {/* rigth side */}
        <div className="w-[600px] h-[500px] mt-[50px]">
          <h1 className="text-[32px] font-semibold mb-[20px] leading-[1.3]">
            Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг
          </h1>

          <p className="text-[26px] font-semibold">
            30 000 сум{" "}
            <span className="line-through text-slate-400 text-[21px] ml-[10px]">
              40 000 сум
            </span>
          </p>

          <div className="flex w-[90px] h-[30px] mt-[30px] justify-between p-2 items-center border border-slate-500 border-solid rounded-md">
            <button onClick={decreaseCounter} className="text-[16px]">-</button>
            <p className="text-[16px]">{counter}</p>
            <button onClick={increaseCounter} className="text-[16px]">+</button>
          </div>

          <div className="w-full h-[1px] bg-slate-400 mt-[30px] mb-[30px]"></div>

          <p className="text-[14px] mb-[30px]">
            Станьте востребованным разработчиком. Вы изучите основы
            программирования и основные концепции компьютерных наук, цифровые
            технологии, операционные системы, программное обеспечение, базы
            данных, системы аналитики, языки программирования и многое другое.
            Познакомитесь с тестированием и системным анализом. На программе
            сможете сделать осознанный выбор специализации и технологий,
            прокачаться в выбранном направлении.
          </p>

          <div>
            <button className="w-[180px] h-[35px] rounded-md text-[13px] bg-violet-600 text-white font-semibold">
              Добавить в корзину
            </button>
            <button className="w-[180px] h-[35px] rounded-md text-[13px] text-violet-600 font-semibold border-2 ml-[10px] border-violet-600">
              Добавить в избранное
            </button>
          </div>
        </div>

        {/* bottom */}
      </div>
      <div className="w-[800px] h-[300px] mx-auto">
        <h1 className="text-[21px] font-medium mb-[20px]">Описание товара</h1>
        <p className="text-[14px]">Стиральный порошок Tide Lenor Touch подходит для использования в стиральных машинах любого типа. Сочетание очищающего эффекта порошка и смягчающего эффекта Lenor делает вещи безупречно чистыми, нежными и свежими. Стирайте согласно рекомендациям на ярлыках текстильных изделий. Рекомендованный режим стирки — от 20 минут при температуре воды 30'C и выше. Обратите внимание: порошок не предназначен для стирки изделий из шерсти и шелка. Синтетическое моющее средство порошкообразное для использования в стиральных машинах любого типа. Рекомендованная температура стирки указана на ярлыках текстильных изделий. Не перегружайте стиральную машину. Оставьте зазор в ширину ладони между загруженным бельем и барабаном. Белье будет двигаться свободно, стирка будет более эффективной.</p>
      </div>
    </>
  );
}
