import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import MainContent from './components/mainContent';
import Footer from './components/footer';

const Page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default Page;