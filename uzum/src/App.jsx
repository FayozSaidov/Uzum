import "./App.css";
import Header from "./components/TopHeader";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./components/ProductPage";
import Layout from "./layout/Layout";

function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
