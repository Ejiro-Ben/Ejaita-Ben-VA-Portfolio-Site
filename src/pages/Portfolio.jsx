import React from 'react'


export default function Portfolio() {
    // replace with live projects/screenshots
    const projects = new Array(6).fill(0).map((_, i) => ({ id: i, title: `Project ${i + 1}` }))
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Portfolio</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map(p => (
                    <div key={p.id} className="rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">Image</div>
                        <div className="p-4">
                            <h4 className="font-semibold">{p.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Short description of the work and outcome.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
