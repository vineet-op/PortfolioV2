"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"


const Hero = () => {
    return (
        <section className='w-screen h-screen bg-gradient-to-r flex flex-col from-black/95 to to-black justify-center '>
            <motion.div
                initial={{
                    opacity: 0,
                    filter: 'blur(8px)',
                }}
                animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transition: {
                        duration: 0.3
                    }
                }}
                className='w-full flex justify-center items-center flex-col gap-10'>
                <Image src={"/profile.png"}
                    alt='Picture'
                    width={110}
                    height={50}
                    className='w-fit rounded-full'
                />
                <div
                    className="font-sans text-xl text-white font-medium tracking-tighter"
                >
                    Hello, I'm Vineet 👋
                </div>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    filter: 'blur(8px)'
                }}
                animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transition: {
                        duration: 0.4,
                        delay: 0.2
                    }
                }}
                className='font-sans text-4xl text-white  flex flex-wrap font-bold mx-auto max-w-xl text-center pt-5 tracking-tighter px-1'>
                Frontend Developer
                Who Build n Breaks stuff
                for web 🕸️
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    filter: 'blur(4px)'
                }}
                animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    transition: {
                        duration: 0.4,
                        delay: 0.3
                    }
                }}
                className=' text-white font-sans text-center mx-auto pt-10 font-light  text-lg'>

                <div className=' text-white font-normal font-sans'>
                    I speclize in building beautiful and functional websites.
                </div>
                <a href="#Contact">
                    <Button className='p-6 mt-8 rounded-full shadow-2xl shadow-green-400 bg-green-400 text-black cursor-pointer font-sans font-semibold text-xs  hover:bg-green-300 hover:shadow-2xl  hover:scale-110 transition duration-200'>CONNECT WITH ME</Button>
                </a>
            </motion.div>
        </section>
    )
}

export default Hero
