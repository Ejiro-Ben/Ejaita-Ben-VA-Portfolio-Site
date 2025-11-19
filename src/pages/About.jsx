import React from 'react'
import Card from '../components/Card'
import { Briefcase, Palette, Code2, Settings } from "lucide-react";


export default function About() {
    return (
        <div className="container py-12 mt-10">
            <div className="mt-6 grid md:grid-cols-2 gap-8">
                <Card>
                    <section className='py-6'>
                        <h1 className="text-3xl font-semibold text-black mb-2 text-center">About Me</h1>
                        <p className="text-gray-700 text-center md:text-xl md:leading-loose">    I am a multi-skilled Virtual Assistant with extensive experience supporting startups
                            and small businesses. I specialize in administrative operations, content creation,
                            and technical support—bringing systems, care, and creativity to every engagement.
                            I wear multiple hats—Virtual Assistant, Web Developer, HR Manager,
                            and Graphic Designer—each allowing me to approach problems from unique angles
                            and deliver well-rounded solutions. As a Virtual Assistant, I ensure smooth operations
                            through clear communication, reliable support, and strong attention to detail.
                            My HR background helps me understand people and teams, enabling me to build structure
                            and processes that truly work. On the technical and creative side, I develop clean,
                            modern websites and create simple, eye-catching graphics that bring ideas to life. Overall,
                            I’m passionate about making life easier for my clients, adding value wherever possible,
                            and delivering work that is thoughtful, professional, and human.</p>

                        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                            <div className='bg-primary-600 text-white mt-2 md:mt-96 rounded-full flex justify-center p-3'>
                                👩‍💻 My Resume
                            </div>
                        </a>
                    </section>
                </Card>

                <Card>
                    <section className="w-full max-w-5xl mx-auto px-6 py-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-5">
                            🧰 Tools & Technologies I Use
                        </h2>

                        {/* Admin Tools */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <Briefcase className="w-6 h-6 text-gray-700" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Administrative & Workflow Tools
                                </h3>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                <li>Asana – Task & project management</li>
                                <li>Slack – Team communication</li>
                                <li>Calendly – Scheduling & calendar automation</li>
                                <li>Zoom – Virtual meetings</li>
                                <li>Google Workspace – Docs, Sheets, Drive, Gmail</li>
                                <li>Microsoft Office Suite – Word, Excel, PowerPoint</li>
                            </ul>
                        </div>

                        {/* Creative Tools */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <Palette className="w-6 h-6 text-gray-700" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Creative & Design Tools
                                </h3>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                <li>Canva – Branding, graphics, marketing materials</li>
                                <li>Adobe Photoshop – Advanced image editing</li>
                                <li>CapCut / Premiere – Video editing</li>
                            </ul>
                        </div>

                        {/* Dev Tools */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <Code2 className="w-6 h-6 text-gray-700" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Web, Tech & Development Tools
                                </h3>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                <li>VS Code – Code editing</li>
                                <li>React – Building dynamic user interfaces</li>
                                <li>React Native – Mobile app UI development</li>
                                <li>Tailwind CSS – Modern utility-based styling</li>
                                <li>npm – Package & dependency management</li>
                                <li>Git & GitHub – Version control & collaboration</li>
                            </ul>
                        </div>

                        {/* Automation */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <Settings className="w-6 h-6 text-gray-700" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Automation Tools
                                </h3>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                <li>Zapier – Workflow automation</li>
                                <li>Notion – Knowledge base & systems management</li>
                            </ul>
                        </div>

                        {/* Why Clients Love Me */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                ⭐ Why Clients Love Working With Me
                            </h3>

                            <ul className="space-y-2 text-gray-700">
                                <li>Reliable and fast communication</li>
                                <li>Strong eye for detail</li>
                                <li>Tech-savvy and highly adaptable</li>
                                <li>Capable of handling admin + creative tasks effectively</li>
                                <li>Helps businesses improve organization and efficiency</li>
                            </ul>
                        </div>
                    </section>
                </Card>
                <div>
                    <h4 className="font-semibold">Services Snapshot</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Administrative support, content management, bookkeeping, customer service, and more — tailored packages to fit your needs.</p>
                </div>
            </div>
        </div>
    )
}