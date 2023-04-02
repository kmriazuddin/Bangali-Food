import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadLineCards from './components/HeadLineCards'
import Food from './components/Food'
import Category from './components/Category'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App;
