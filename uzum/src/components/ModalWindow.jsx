import React from "react";

export default function Modal() {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center bg-black bg-opacity-40 top-0 left-0 z-50 ">
      <div className="w-[400px] relative h-[480px] p-6 bg-white rounded-2xl">
        <div className="text-[20px] absolute right-5 top-5 rounded-2xl w-[30px] flex items-center justify-center h-[30px] bg-slate-400">
          X
        </div>
        <h1 className="mt-[100px] text-[24px] font-medium">
          Введите номер телефона
        </h1>
        <p className="text-[16px] mt-[5px]">
          Отправим смс с кодом подтверждения
        </p>
        <form className="flex mt-6 flex-wrap w-full h-fit">
          <span className="flex bg-slate-100 w-[350px] h-[50px] rounded-xl items-center p-5">
            <p className="text-[20px] text-[#1f2026]">+998</p>
            <input
              placeholder="00-000-00-00"
              className="focus:border-none focus:outline-none text-[20px] ml-[10px] placeholder-[#1f2026] bg-transparent"
              type="number"
              style={{
                appearance: "none",
                MozAppearance: "textfield",
              }}
            ></input>
          </span>
          <button className="w-[350px] rounded-xl mt-5 h-[50px] text-white bg-violet-600">Получить код</button>
        </form>

        <p className="text-[14px] mt-20 text-center">
          Авторизуясь, вы соглашаетесь c {''}
           <span className="text-[#3377ff]">политикой обработки персональных данных</span>
        </p>
      </div>
    </div>
  );
}
