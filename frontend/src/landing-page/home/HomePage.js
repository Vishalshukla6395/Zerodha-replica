import React from 'react';
import Navbar from '../Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import Footer from '../Footer'
import Awards from './Awards'
import OpenAccount from '../OpenAccount'

function HomePage() {
    return ( 
        <>
        <Hero></Hero>
        <Awards></Awards>
        <Stats />
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
        </>
     );
}

export default HomePage;