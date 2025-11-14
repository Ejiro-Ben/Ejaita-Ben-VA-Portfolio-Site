import React from 'react'


export default function About() {
    return (
        <div className="container py-12 mt-20">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <div className="mt-6 grid md:grid-cols-2 gap-8">
                <div>
                    <p className="text-gray-700 dark:text-gray-300">    I am a multi-skilled Virtual Assistant with extensive experience supporting startups and small businesses. I specialize in administrative operations, content creation, and technical support—bringing systems, care, and creativity to every engagement. I wear multiple hats—Virtual Assistant, Web Developer, HR Manager, and Graphic Designer—each allowing me to approach problems from unique angles and deliver well-rounded solutions. As a Virtual Assistant, I ensure smooth operations through clear communication, reliable support, and strong attention to detail. My HR background helps me understand people and teams, enabling me to build structure and processes that truly work. On the technical and creative side, I develop clean, modern websites and create simple, eye-catching graphics that bring ideas to life. Overall, I’m passionate about making life easier for my clients, adding value wherever possible, and delivering work that is thoughtful, professional, and human.</p>


                    <ul className="mt-6 space-y-2">
                        <li>✅ 5+ years supporting remote teams</li>
                        <li>✅ Expertise with tools like Notion, Asana, Zapier</li>
                        <li>✅ Confidential and reliable</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Services Snapshot</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Administrative support, content management, bookkeeping, customer service, and more — tailored packages to fit your needs.</p>
                </div>
            </div>
        </div>
    )
}