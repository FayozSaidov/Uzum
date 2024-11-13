import React from 'react'
import PopularProductsPage from '../components/PopularProductsPage'
import SwiperInMain from "../components/SwiperInMain"
import Modal from "../components/ModalWindow"

const Home = () => {
  return (
    <>
      <SwiperInMain />
      <PopularProductsPage />
    </>
  )
}

export default Home
