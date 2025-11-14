import React from 'react'
import Hero from '../components/Hero'
import { testimonials } from '../data/sampleData'


export default function Home() {
    return (
        <main>
            <Hero />


            <section className="container max-w-md mt-5 py-12 bg-primary-200 shadow-lg md:max-w-6xl md:mt-10 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Why choose a dedicated Virtual Assistant?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-primary-300 rounded-xl">
                        <h4 className="font-semibold">Save Time</h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Delegate tasks and focus on high-impact work.</p>
                    </div>
                    <div className="p-6 bg-primary-300 rounded-xl">
                        <h4 className="font-semibold">Reliable Support</h4>
                        <p className="mt-2 text-sm text-gray-600">Consistent processes and clear communication.</p>
                    </div>
                    <div className="p-6 bg-primary-300  rounded-xl">
                        <h4 className="font-semibold">Scalable</h4>
                        <p className="mt-2 text-sm text-gray-600">Services that grow with your business.</p>
                    </div>
                </div>
            </section>


            <section className="container max-w-md mt-5 py-12 bg-primary-200 shadow-lg md:max-w-6xl lg:mt-10 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map(t => (
                        <div key={t.name} className="p-6 bg-primary-300 rounded-xl">
                            <div className="italic">"{t.quote}"</div>
                            <div className="mt-3 font-semibold">{t.name}</div>
                            <div className="text-sm text-gray-500">{t.role}</div>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    )
}