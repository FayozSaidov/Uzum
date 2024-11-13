import React, { useState } from "react";

export default function Modal({ onClose, onUserRegistered }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4040/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onUserRegistered(formData.name); // Обновляем имя в родительском компоненте
        onClose(); // Закрытие модального окна
        setFormData({ name: "", email: "" }); // Очистка формы
      } else {
        alert("Ошибка при регистрации");
      }
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
    }
  };

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
        <h1 className="mt-[100px] text-[24px] font-medium">Введите свои данные</h1>

        <form
          className="flex mt-6 flex-wrap w-full h-fit"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            placeholder="Ваше имя"
            className="focus:border-none focus:outline-none text-[20px] placeholder-[#1f2026] bg-slate-100 w-[350px] h-[50px] rounded-xl items-center p-5"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          ></input>

          <input
            name="email"
            placeholder="Ваша почта"
            className="focus:border-none focus:outline-none text-[20px] placeholder-[#1f2026] bg-slate-100 mt-3 w-[350px] h-[50px] rounded-xl items-center p-5"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>

          <button
            className="w-[350px] rounded-xl mt-5 h-[50px] text-white bg-violet-600"
            type="submit"
          >
            Войти
          </button>
        </form>

        <p className="text-[14px] mt-16 text-center">
          Авторизуясь, вы соглашаетесь с{" "}
          <span className="text-[#3377ff]">
            политикой обработки персональных данных
          </span>
        </p>
      </div>
    </div>
  );
}
