import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Galery from './components/galery'
import ItemsList from './components/ItemsList'
import Title from './components/title'

function App() {
  return (
    <>
      <Header />
      <Title />
      <Galery />
      <ItemsList />
      <Footer />
    </>
  )
}

export default App
