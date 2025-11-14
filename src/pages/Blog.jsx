import React from 'react'


export default function Blog() {
    const posts = [
        { slug: 'time-saving-tips', title: 'Top 5 Time-Saving Tips for Busy Entrepreneurs', excerpt: 'Practical tips to reclaim your day.' },
        { slug: 'tools', title: 'Essential Tools for Remote Teams', excerpt: 'Tools I use to manage projects and communications.' }
    ]
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Blog</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {posts.map(p => (
                    <article key={p.slug} className="p-6 bg-primary-200 dark:bg-gray-800 rounded-xl">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.excerpt}</p>
                        <div className="mt-4"><a className="text-sm underline" href="#">Read more</a></div>
                    </article>
                ))}
            </div>
        </div>
    )
}