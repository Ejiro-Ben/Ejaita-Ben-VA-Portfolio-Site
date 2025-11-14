import React from 'react'
import { testimonials } from '../data/sampleData'


export default function Testimonials() {
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Testimonials</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map(t => (
                    <div key={t.name} className="p-6 bg-primary-200 dark:bg-gray-800 rounded-xl">
                        <div className="italic">"{t.quote}"</div>
                        <div className="mt-3 font-semibold">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}