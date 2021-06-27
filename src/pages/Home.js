import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom"
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return (
        // This is React-Fragment
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitile="deluxe rooms starting at 299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRoom />
        </>
    )
}
