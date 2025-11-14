import React from 'react'


export default function Footer() {
    return (
        <footer className="bg-primary-500 mt-20 py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="font-semibold">Ejaita Ben</div>
                    <div className="text-sm">Helping you stay organized, always.</div>
                </div>
                <div className="text-sm">© {new Date().getFullYear()} Ejaita Ben. All rights reserved.</div>
            </div>
        </footer>
    )
}