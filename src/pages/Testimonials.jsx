import React from 'react'


export default function Testimonials() {
    const testimonials = [
        { id: 1, name: 'Client Name', company: 'Company', text: 'Great service and support!' },
        { id: 2, name: 'Client Name', company: 'Company', text: 'Professional and reliable.' },
        { id: 3, name: 'Client Name', company: 'Company', text: 'Highly recommended!' },
    ]
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Testimonials</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map(t => (
                    <div key={t.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">"{t.text}"</p>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
