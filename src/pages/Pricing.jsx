import React from 'react'


const plans = [
    { name: 'Basic', price: '$250', items: ['10 hours support', 'Email management', 'Scheduling'] },
    { name: 'Standard', price: '$600', items: ['30 hours support', 'Social media content', 'Basic bookkeeping'] },
    { name: 'Premium', price: '$1200', items: ['80 hours support', 'Full admin + creative', 'Priority support'] }
]


export default function Pricing() {
    return (
        <div className="container py-12 pt-40">
            <h1 className="text-3xl font-semibold mb-6">Pricing & Packages</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {plans.map(p => (
                    <div key={p.name} className="p-6 bg-primary-200 dark:bg-gray-800 rounded-xl border dark:border-gray-700">
                        <h3 className="font-semibold text-xl">{p.name}</h3>
                        <div className="text-2xl font-bold my-4">{p.price}</div>
                        <ul className="text-sm space-y-2">
                            {p.items.map(i => <li key={i}>• {i}</li>)}
                        </ul>
                        <button className="mt-6 px-4 py-2 bg-brand-accent text-white rounded">Choose</button>
                    </div>
                ))}
            </div>
        </div>
    )
}