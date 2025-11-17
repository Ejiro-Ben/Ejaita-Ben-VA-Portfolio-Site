import React from 'react'


export default function FAQ() {
    const faqs = [
        { id: 1, question: 'What services do you offer?', answer: 'We offer a range of virtual assistant services including email management, scheduling, data entry, and more.' },
        { id: 2, question: 'What is your availability?', answer: 'We are available during business hours and can arrange extended availability as needed.' },
        { id: 3, question: 'How do we communicate?', answer: 'We communicate via email, phone, video calls, and project management tools.' },
        { id: 4, question: 'What is your pricing?', answer: 'Pricing varies based on services required. Please contact us for a custom quote.' },
    ]
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map(faq => (
                    <div key={faq.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
