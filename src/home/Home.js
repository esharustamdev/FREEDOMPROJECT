import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import Section from './Section'
import Footer from '../components/Footer'
import Environment from './Environment'
import Education from './Education'
import Fashion from './Fashion'
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Section />
      <Environment />
      <Education />
      <Fashion />

      <Footer />
    </>
  )
}

export default Home
