"use client"

import { Github, Linkedin, Mail, MessageCircle, Send, Twitter } from 'lucide-react'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button'
import { motion } from "motion/react"

const Contacts = () => {




    return (
        <section
            className='w-screen h-full font-sans  bg-gradient-to-r  from-black/95 to to-black text-white'>

            <h1 className='p-10 text-4xl  font-sans font-bold tracking-tighter max-w-2xl'> Let's Connect! 🤝</h1>
            <div className='px-10 font-sans text-white text-lg'>
                Wheather it's a open roles, freelance or just a Hello I'm here 💯
            </div>



            <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: 0.3,
                    delay: 0.2,
                    damping: 2
                }}
                className='px-10 flex flex-col gap-5 w-full max-w-2xl pt-10'>

                <Button
                    variant="outline"
                    className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white border-none h-14 text-lg justify-start gap-3"
                    onClick={() => window.open("https://x.com/Vineet2OP", "_blank")}
                >
                    <MessageCircle className="h-5 w-5" />
                    Dm me on Twitter
                </Button>

                <Button
                    variant="outline"
                    className="w-full bg-[#0A66C2] hover:bg-[#0958a8] text-white border-none h-14 text-lg justify-start gap-3"
                    onClick={() => window.open("https://www.linkedin.com/in/vineet-op", "_blank")}
                >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                </Button>

                <Button
                    variant="outline"
                    className="w-full bg-white hover:bg-gray-100 text-black border-none h-14 text-lg justify-start gap-3"
                    onClick={() => window.open("https://github.com/vineet-op", "_blank")}
                >
                    <Github className="h-5 w-5" />
                    Check out my GitHub
                </Button>

                <Button
                    variant="outline"
                    className="w-full bg-[#f13a3a] hover:bg-[#d83333] text-white border-none h-14 text-lg justify-start gap-3"
                    onClick={() => window.open("mailto:vineet290403@gmail.com", "_blank")}
                >
                    <Mail className="h-5 w-5" />
                    Send me an Email
                </Button>

            </motion.div>


            <footer className='text-center p-10 font-sans text-base'>
                Made with 💖 By <a href="https://twitter.com/Vineet2OP" target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-300">Vineet</a>
            </footer>


        </section>
    )
}

export default Contacts