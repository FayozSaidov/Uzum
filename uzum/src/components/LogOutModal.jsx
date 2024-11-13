import React from "react";

const LogOutModal = ({ onClose, onLogout }) => {
  return (
    <div
      className="fixed w-screen h-screen flex items-center justify-center bg-black bg-opacity-40 top-0 left-0 z-50"
      onClick={onClose}
    >
      <div
        className="w-[400px] relative z-51 h-[480px] p-6 bg-white rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="text-[20px] text-white absolute right-5 top-5 rounded-2xl w-[30px] flex items-center justify-center h-[30px] bg-slate-400 cursor-pointer"
          onClick={onClose}
        >
          X
        </div>
        <h1 className="mt-[100px] text-[24px] font-medium">
          Вы действительно хотите выйти с аккаунта?
        </h1>

        <button
            className="w-[350px] rounded-xl mt-5 h-[50px] text-white bg-violet-600"
            onClick={onClose}
          >
            Отмена
          </button>

        <button className="w-[350px] rounded-xl mt-5 h-[50px] text-white bg-violet-600">
          Выйти
        </button>

        <p className="text-[14px] mt-16 text-center">
          Авторизуясь, вы соглашаетесь с{" "}
          <span className="text-[#3377ff]">
            политикой обработки персональных данных
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogOutModal;
