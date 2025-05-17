import Image from 'next/image'
import React from 'react'
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from './ui/button'
import Link from 'next/link'
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section className='h-screen w-screen bg-gradient-to-r flex flex-col from-black/95 to to-black text-white'>
            <h1 className='p-10 text-5xl font-bold tracking-tight '>Projects</h1>

            <div className='w-full h-3/4 border-2 flex items-center justify-self-start p-10'>
                <div className='w-96 h-[30rem] border-2 rounded-4xl object-fill'>
                    <Image alt='project_image' src={"/profile.png"} width={400} height={500} className='h-60 rounded-4xl' />
                    <div className='p-8 font-medium font-sans text-2xl flex flex-col gap-2 w-full'>
                        <div> PrepSuite 🚀 </div>
                        <div className='font-sans text-sm font-normal w-full'>
                            AI Powered Mock Interview Platform were people can practice mock interview with AI feedback.
                        </div>
                        <div className='flex gap-1 py-2'>
                            <Badge className='bg-white text-black'>NextJS</Badge>
                            <Badge className='bg-white text-black'>Tailwind</Badge>
                            <Badge className='bg-white text-black'>Shadcn</Badge>
                            <Badge className='bg-white text-black'>Prisma</Badge>
                            <Badge className='bg-white text-black'>Postgres</Badge>
                        </div>
                        <div className='flex gap-3 justify-end  w-full py-3 ml-1 '>
                            <Button className='w-1/5 font-sans cursor-pointer'> <ExternalLink /></Button>
                            <Button className='w-1/5 font-sans cursor-pointer'><Github /></Button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects