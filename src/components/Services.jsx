import React from 'react'
import { services } from '../data/sampleData'
import Card from '../components/Card'


export default function Services() {
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Services</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {services.map(s => (
                    <Card key={s.id} title={s.title}>
                        <ul className="list-disc pl-5 space-y-1">
                            {s.items.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </Card>
                ))}
            </div>
        </div>
    )
}