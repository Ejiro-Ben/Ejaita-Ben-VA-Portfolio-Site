import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero() {
    return (
        <section className="py-20 mt-20 bg-primary-300 felx flex-row">
            <div className="container grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold">Professional Virtual Assistant<br /><span className="text-brand-accent">organized, creative, and reliable.</span></h1>
                    <p className="mt-6 text-lg">I help entrepreneurs and small teams stay focused on growth by handling the time-consuming tasks that slow you down.</p>
                    <div className="mt-6 flex flex-col md:flex-row md:gap-4">
                        <Link to='/contact' className="px-6 py-3 text-white font-bold bg-primary-900 hover:bg-primary-800 rounded-lg shadow">Book a Consultation✅</Link>
                        <Link to='/services' className="px-6 py-3 text-white font-bold bg-primary-900 hover:bg-primary-800 rounded-lg shadow">View Services🔎</Link>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden h-80 w-80">
                    <img src="/pic-1.jpg" alt="hero" className="object-cover h-full w-full" />
                </div>
            </div>
        </section>
    )
}