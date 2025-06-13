"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './projectData'



const Projects = () => {
    return (
        <section className='h-fit pb-14 w-screen bg-gradient-to-r  from-black/95 to to-black text-white'>
            <h1 className='p-10 text-4xl font-sans font-bold tracking-tighter max-w-lg  '>Stuff I've Built 🚀</h1>

            <div className='flex flex-col items-center lg:flex-row gap-8 w-full px-10 h-full bg-gradient-to-r justify-center from-black/95 to to-black'>
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>

        </section>
    )
}

export default Projects