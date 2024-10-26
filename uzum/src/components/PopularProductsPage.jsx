import basketImg from "../assets/Group 237756.png";
import React, { useState, useEffect } from "react";

const PopularProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProd, setVisibelity] = useState(
    () => JSON.parse(localStorage.getItem("visibleProd")) || 4
  );
  useEffect(() => {
    // Загрузка данных из db.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("visibleProd", JSON.stringify(visibleProd));
  }, [visibleProd]);
  
  const loadMore = () =>{
    setVisibelity(prevCount =>  prevCount + 8)
  }

  return (
  

    <>
      <div className="w-5/6 h-[500px] mx-auto mt-[70px]">
        <h1 className="text-[30px] font-semibold">Популярное</h1>
        <div className="w-full h-auto flex flex-wrap mx-auto justify-between">
          {products.slice(0, visibleProd).map((product, key) => (
            <div
              key={key}
              className="w-[245px] ml-[20px] h-[450px] mt-[30px] overflow-hidden cursor-pointer hover:shadow-xl rounded-md transition"
            >
              <div className="w-[240px] p-3 h-[280px] rounded-xl overflow-hidden">
                <img src={product.media[0]} className='w-[240px] h-[240px]' alt="" />
              </div>
              <div className="w-5/6 ml-[10px] mt-[10px] h-[130px] overflow-hidden">
                <p className="text-[14px] font-medium">{product.title}</p>
                <p className="text-[12px] text-gray-500">{product.rating}</p>
              </div>
                <div className="w-[225px] mx-auto h-[50px] -mt-[30px] justify-between flex items-center">
                  <span>
                    <p className="line-through text-[12px] text-gray-500">
                      35 000
                    </p>
                    <p className="text-[14px]">{product.price}</p>
                  </span>
                  <img
                    src={basketImg}
                    className="w-[30px] h-[30px] cursor-pointer"
                    alt=""
                  />
                </div>
            </div>
          ))}
        </div>
          <button onClick={loadMore} className="w-[700px] h-[60px] mt-[50px] hover:bg-slate-300 cursor-pointer transition-colors font-semibold bg-slate-200 rounded-lg block mx-auto mb-[50px]">Показать ещё 10</button>
      </div>
    </>
  );
};

export default PopularProductsPage;
