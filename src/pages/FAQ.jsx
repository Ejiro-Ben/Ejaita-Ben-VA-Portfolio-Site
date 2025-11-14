import React from 'react'


const faqs = [
    { q: 'How do we start?', a: 'Book a consultation via the contact form or Calendly link.' },
    { q: 'What are your hours?', a: 'Typical business hours are Mon-Fri, 9am-5pm. Flexible options available.' },
    { q: 'Do you sign an NDA?', a: 'Yes — confidentiality is standard.' }
]


export default function FAQ() {
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
            <div className="space-y-4">
                {faqs.map((f, i) => (
                    <details key={i} className="p-4 bg-primary-200 dark:bg-gray-800 rounded-lg">
                        <summary className="font-semibold">{f.q}</summary>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.a}</div>
                    </details>
                ))}
            </div>
        </div>
    )
}