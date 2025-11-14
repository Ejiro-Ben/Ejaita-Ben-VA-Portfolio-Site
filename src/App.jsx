import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'


export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}