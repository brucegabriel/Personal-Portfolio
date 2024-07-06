import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
