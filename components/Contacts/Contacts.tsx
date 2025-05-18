"use client"

import { Github, LinkedinIcon, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Contacts = () => {
    return (
        <section className='w-screen h-screen font-sans  bg-gradient-to-r  from-black/95 to to-black text-white'>

            <h1 className='p-10 text-5xl  font-sans font-bold tracking-tighter max-w-2xl'> Let's Connect! 🤝</h1>
            <div className='px-10 font-sans text-white text-lg pb-10'>
                Wheather it's a open roles, freelance or just a Hello I'm here 💯
            </div>

            <div className='px-10 flex flex-col gap-5 w-full max-w-2xl pt-10'>

                <Button
                    variant="default"
                    className='bg-blue-400 p-8 rounded-full flex items-center justify-center w-full cursor-pointer'
                    onClick={() => window.open('https://twitter.com/Vineet2OP', '_blank')}
                >
                    <Twitter className='text-white w-10 h-10' />
                    <span className='ml-4 text-white'>Chat with me on Twitter</span>
                </Button>

                <Button
                    variant="default"
                    className='bg-blue-900 p-8 rounded-full flex items-center justify-center w-full cursor-pointer'
                    onClick={() => window.open('https://www.linkedin.com/in/vineet-op', '_blank')}
                >
                    <LinkedinIcon className='text-white w-10 h-10' />
                    <span className='ml-4 text-white'>Connect on LinkedIn</span>
                </Button>

                <Button
                    variant="default"
                    className='bg-white text-black p-8 rounded-full flex items-center justify-center w-full cursor-pointer'
                    onClick={() => window.open('https://github.com/vineet-op', '_blank')}
                >
                    <Github className='text-black w-10 h-10' />
                    <span className='ml-4 text-black'>Check out my GitHub</span>
                </Button>

                <Button
                    variant="default"
                    className='bg-red-500 p-8 rounded-full flex items-center justify-center w-full cursor-pointer'
                    onClick={() => window.open('mailto:vineetworks29@gmail.com')}
                >
                    <Mail className='text-white w-10 h-10' />
                    <span className='ml-4 text-white'>Send me an Email</span>
                </Button>

            </div>

            <footer className='-p-3 text-center m-10 mt-36 font-sans text-base'>
                Made with 💖 By <a href="https://twitter.com/Vineet2OP" target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-300">Vineet</a>
            </footer>


        </section>
    )
}

export default Contacts