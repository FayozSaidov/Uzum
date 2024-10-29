import "./App.css";
import Header from "./components/Header";
import UnderHedaer from "./components/UnderHedaer";
import SwiperInMain from "./components/SwiperInMain";
import PopularProductsPage from "./components/PopularProductsPage";
import ProductPage from "./components/ProductPage";
import BasketPage from "./components/BasketPage";

function App() {
  return (
    <>
      <Header />
      <UnderHedaer />
      <SwiperInMain />
      <PopularProductsPage />
      <ProductPage />
      <BasketPage />
    </>
  );
}

export default App;
