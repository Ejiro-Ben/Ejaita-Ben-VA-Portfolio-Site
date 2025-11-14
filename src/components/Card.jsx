import React from 'react'


export default function Card({ title, children }) {
    return (
        <div className="p-6 bg-primary-200 dark:bg-gray-800 rounded-2xl shadow-sm border dark:border-gray-700">
            <h3 className="font-semibold mb-3">{title}</h3>
            <div className="text-sm text-gray-600 dark:text-gray-300">{children}</div>
        </div>
    )
}