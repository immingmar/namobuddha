import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Featured from '../components/Featured'
import CategorySection from '../components/CategorySection'
import NewArrivals from '../components/NewArrivals'
import Story from '../components/Story'
import TestimonialSection from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Header />
      {/* <Navbar/> */}
      <Hero />
      <Featured />
      {/* <Slider/> */}
      {/* <Categories/> */}
      <CategorySection />
      <NewArrivals />
      {/* <Products/> */}
      {/* <Newsletter/> */}
      <Story/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default Home
