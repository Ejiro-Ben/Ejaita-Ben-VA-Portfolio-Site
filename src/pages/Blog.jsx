import React from 'react'


export default function Blog() {
    const posts = [
        { id: 1, title: 'Blog Post 1', date: '2024-01-15', excerpt: 'This is a blog post excerpt.' },
        { id: 2, title: 'Blog Post 2', date: '2024-01-10', excerpt: 'Another interesting post about virtual assistance.' },
        { id: 3, title: 'Blog Post 3', date: '2024-01-05', excerpt: 'Tips and tricks for productivity.' },
    ]
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold mb-6">Blog</h1>
            <div className="space-y-6">
                {posts.map(post => (
                    <div key={post.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-accent">
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
