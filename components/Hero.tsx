import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section className='w-screen h-screen bg-gradient-to-r flex flex-col from-black/95 to to-black'>
            <Navbar />
            <div className='w-full flex justify-center items-center flex-col gap-10 mt-6'>
                <Image src={"/profile.png"}
                    alt='Picture'
                    width={100}
                    height={10}
                    className='rounded-full'
                />
                <div className='font-sans text-xl text-white font-bold tracking-tighter'>
                    Hi, I'm Vineet 👋
                </div>
            </div>
            <div className='font-sans text-5xl text-white py-1 font-bold mx-auto max-w-xl text-center pt-5 tracking-tighter'>
                Building digital <br />
                products, brands, and
                experience.
            </div>
            <div className=' text-white font-sans text-center mx-auto pt-10 font-light  text-base'>
                a <span className='font-semibold'>Frontend Developer</span> Based in India.
                <div className=' text-white font-sans'>
                    I speclize in building beautiful and functional websites.
                </div>
                <Button className='p-6 mt-8 rounded-full bg-white text-black cursor-pointer font-sans font-semibold text-xs hover:bg-none hover:bg-white'>CONNECT WITH ME</Button>
            </div>
        </section>
    )
}

export default Hero
