import React, { useEffect, useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getProduct } from "../services/api";
import ProductSwiper from "./ProductSwiper";
import CounterOfDiscount from "./CounterOfDiscount";

export default function ProductPage() {
  const location = useLocation();
  const [counter, setCounter] = useState(0);
  let productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(productId)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return;

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className=" mx-auto h-[600px] flex mt-9 justify-between">
        {/* left side */}
        <div className="w-[600px] h-[600px]">
          <ProductSwiper media={product.media} />
        </div>

        {/* rigth side */}
        <div className="w-[600px] h-[500px] mt-[50px]">
          <h1 className="text-[32px] font-semibold mb-[20px] leading-[1.3]">
            {product.title}
          </h1>

          <p className="text-[26px] font-semibold">
            {product.price}

            <CounterOfDiscount
              price={product.price}
              percent={product.salePercentage}
              customStyles='line-through text-slate-400 text-[21px] ml-[10px]'
            />
          </p>

          <div className="flex w-[90px] h-[30px] mt-[30px] justify-between p-2 items-center border border-slate-500 border-solid rounded-md">
            <button onClick={decreaseCounter} className="text-[16px]">
              -
            </button>
            <p className="text-[16px]">{counter}</p>
            <button onClick={increaseCounter} className="text-[16px]">
              +
            </button>
          </div>

          <div className="w-full h-[1px] bg-slate-400 mt-[30px] mb-[30px]"></div>

          <p className="text-[14px] mb-[30px]">{product.description}</p>

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
        <p className="text-[14px]">{product.description}</p>
      </div>
    </>
  );
}
