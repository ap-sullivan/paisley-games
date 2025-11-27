import React from 'react'
import TopNav from '../components/navigation/TopNav';
import Hero from '../components/layout/Hero';
import Intro from '../components/layout/Intro';
import Games from '../components/layout/Games';
import Tickets from '../components/layout/Tickets';
import News from '../components/layout/News';
import Contact from '../components/layout/Contact'
import Footer from '../components/navigation/Footer';

function Home() {
  return (
   <>

   <TopNav/>
   <Hero/>
   <Intro/>
   <Games/>
   <Tickets/>
   <News/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home
