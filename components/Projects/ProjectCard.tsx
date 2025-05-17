import React from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from '../ui/button'
import { Github, ExternalLink } from 'lucide-react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
} from "@/components/ui/card"

type ProjectProps = {
    title: string
    description: string
    image: string
    techStack: string[]
    github?: string
    live?: string
}

const ProjectCard = ({ title, description, image, techStack, github, live }: ProjectProps) => {
    return (

        <Card className="bg-black text-white w-96 h-[32.8rem] rounded-4xl  border-4 border-purple-400">
            <Image
                alt='project_image'
                src={image}
                width={500}
                height={500}
                className='h-60 w-full object-fill rounded-4xl relative -top-6 p-2'
            />
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-sans">{title}</CardTitle>
                <CardDescription className="text-sm text-gray-400 font-sans">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex  items-start gap-1.5 flex-wrap'>
                    {techStack.map((tech, index) => (
                        <Badge key={index} className='bg-white text-black font-sans'>{tech}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-3">

                <Button className='border-white text-white hover:text-black hover:bg-white'>
                    <ExternalLink />
                </Button>

                <Button className='border-white text-white hover:text-black hover:bg-white'>
                    <Github />
                </Button>

            </CardFooter>
        </Card>


    )
}

export default ProjectCard
