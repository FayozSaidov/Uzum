import React, { useState, useEffect } from "react";
import { Layers } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import Logo from "../assets/logo_uzum.svg";
import TopHeader from "./TopHeader";
import Modal from "./ModalWindow";
import LogOutModal from "./LogOutModal";


const Header = () => {
  const [userName, setUserName] = useState("");
  const handleUserRegistered = (name) => {
    setUserName(name);
  };

  // exit
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);  // Открыть модальное окно выхода
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);  // Закрыть модальное окно выхода
  };

  const handleLogout = () => {
    setUserName("");  // Очистить имя пользователя
    closeLogoutModal();  // Закрыть модальное окно выхода
  };




  //

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const navigation = [
    {
      img: <CgProfile />,
      text: userName ? `${userName}` : "Войти", 
      onClick: userName ? openLogoutModal : openModal,
    },
    {
      img: <FaRegHeart />,
      text: "Избранное",
    },
    {
      img: <BsHandbag />,
      text: "Корзина",
    },
  ];

  return (
    <>
      <TopHeader />
      <div className="w-[92%] mx-auto flex h-[50px] items-center justify-between">
        <img src={Logo} alt="Logo" /> {/* Добавьте alt для изображения */}
        <button className="w-[120px] h-[40px] hover:bg-violet-400 duration-300 flex items-center justify-between p-5 bg-violet-100 text-[14px] font-semibold text-violet-600 rounded-md">
          <Layers className="mr-[5px]" /> Каталог
        </button>
        <input
          type="text"
          name="search"
          placeholder="Искать товары и категории"
          className="w-[450px] h-[40px] rounded-md outline-none focus:ring-0 p-4 border-l border-t border-b border-slate-300"
        />
        <div className="w-[70px] h-[40px] bg-slate-200 -ml-[45px] rounded-tl-none border-slate-300 border-t border-r border-b rounded-tr-[6px] cursor-pointer rounded-bl-none rounded-br-[6px] flex items-center justify-center">
          <IoSearchOutline size={"20px"} />
        </div>

        <div className="flex space-x-4"> {/* Добавляем пространство между элементами */}
          {navigation.map((item, idx) => (
            <div key={idx} className="flex items-center cursor-pointer">
              <button
                onClick={item.onClick}
                className="w-[120px] h-[40px] flex items-center justify-center"
              >
                {item.img}
                <p className="text-[14px] hover:font-semibold duration-300 ml-[15px]">
                  {item.text}
                </p>
              </button>
            </div>
          ))}
        </div>
        {isModalOpen && <Modal onClose={closeModal} onUserRegistered={handleUserRegistered} />}
        {isLogoutModalOpen && <LogOutModal onClose={closeLogoutModal} onLogout={handleLogout} />}
      </div>
    </>
  );
};

export default Header;