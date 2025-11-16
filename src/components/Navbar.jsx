import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from "lucide-react"


const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/portfolio', 'Portfolio'],
    ['/testimonials', 'Testimonials'],
    ['/blog', 'Blog'],
    ['/faq', 'FAQ'],
    ['/pricing', 'Pricing'],
    ['/contact', 'Contact'],
]


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed w-full bg-primary-500 dark:bg-primary-900 shadow">
            <div className="container flex items-center justify-between py-4">
                <Link to='/' className="flex items-center gap-3">
                    <div className="w-20 h-20 rounded-md bg-[url('/pic-1.jpg')] bg-cover bg-center shadow" />
                    <div>
                        <div className="text-lg font-semibold">Ejaita Ben</div>
                        <div className="text-sm ">Professional Virtual Assistant</div>
                    </div>
                </Link>


                <nav className="hidden md:flex items-center gap-4">
                    {links.map(([to, label]) => (
                        <NavLink key={to} to={to} className={({ isActive }) => `text-sm ${isActive ? 'text-brand-accent font-semibold' : 'text-gray-700'}`}>
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="max-w-6xl lmpx-4 py-3 flex justify-between items-center">
                    {/* Hamburger Icon */}
                    <button
                        className="md:hidden text-gray-800 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden shadow-inner fixed w-40 top-20 right-0 z-10 flex flex-col text-black rounded-lg max-h-80 overflow-auto bg-primary-200 p-2">
                        {links.map(([to, label]) => (
                            <NavLink key={to} to={to} className={({ isActive }) => `text-sm p-4 bg-primary-600 my-1 hover:bg-primary-800  rounded-lg ${isActive ? 'text-black font-semibold' : 'text-black'}`}>
                                {label}
                            </NavLink>
                        ))}
                    </div>
                )}

            </div>
        </header>
    )
}