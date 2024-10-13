import React from "react";
import { Layers } from 'lucide-react';
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

const UnderHedaer = () => {
    
    const navigation = [
        {
            img: <CgProfile/>,
            text: 'Войти'
        },
        {
            img: <FaRegHeart/>,
            text: 'Избранное'
        },
        {
            img: <BsHandbag/>,
            text: 'Корзина'
        }
    ]

  return (
    <>
      <div className="w-5/6 mx-auto flex h-[50px] items-center justify-between">
        <p className="text-[30px] text-violet-600 font-extrabold">uzum market</p>
        <button className="w-[120px] h-[40px] flex items-center justify-between p-5 bg-violet-100 text-[14px] font-semibold text-violet-600 rounded-md"><Layers className="mr-[5px]"/> Каталог</button>
        <input
          type="text"
          name=""
          id=""
          placeholder="Искать товары и категории"
          className="w-[450px] h-[40px] rounded-md p-4 border-l border-t border-b border-slate-300"
        />
        <div className="w-[70px] h-[40px] bg-slate-200 -ml-[45px] rounded-tl-none border-slate-300 border-t border-r border-b rounded-tr-[6px] cursor-pointer rounded-bl-none rounded-br-[6px] flex items-center justify-center">
          <IoSearchOutline size={'20px'}/>
        </div>
       
       {navigation.map((item, idx) => (
        <div className="flex items-center cursor-pointer">
          {item.img} 
          <p className="text-[14px] ml-[15px]">{item.text}</p>
        </div>
       ))}
      </div>
    </>
  );
};

export default UnderHedaer;
