import React from 'react'


export default function Contact() {
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Contact</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <form className="p-6 bg-primary-200 dark:bg-gray-800 rounded-xl space-y-4">
                    <input className="w-full p-3 border rounded-lg" placeholder="Your name" />
                    <input className="w-full p-3 border rounded-lg" placeholder="Your email" />
                    <input className="w-full p-3 border rounded-lg" placeholder="Subject" />
                    <textarea className="w-full p-3 border rounded-lg" rows={6} placeholder="Message" />
                    <button className="px-6 py-3 bg-primary-900 hover:bg-primary-800 text-white rounded">Send Message</button>
                </form>
                <div>
                    <h4 className="font-semibold">Availability</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Available for part-time and full-time retainer agreements.</p>
                    <h4 className="font-semibold mt-6">Other ways to connect</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">LinkedIn • Email • Calendly</p>
                </div>
            </div>
        </div>
    )
}