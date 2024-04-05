"use client";
import React from 'react'
import IntroHeader from './IntroHeader';
import Parnters from './partners';
import OurCommunity from './OurCommunity';
import Navbar2 from './Navbar';
import { StickyScrollRevealDemo } from './ui/ScrollMe';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className='overflow-x-hidden relative top-12'>
      <Navbar2/>
      <IntroHeader/>
      <Parnters/>
      <StickyScrollRevealDemo/>
      <OurCommunity/>
      <Footer/>
    </div>
  )
}

export default Dashboard
