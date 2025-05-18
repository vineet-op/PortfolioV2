"use client"

import { motion } from "framer-motion"
import {
    Braces,
    FileJson,
    Layers,
    Globe,
    Palette,
    Server,
    Database,
    Github,
    Cog,
    Box,
    GitBranch,
    Command,
} from "lucide-react"
import GitHubCalendar from "react-github-calendar"



const Skills = () => {

    const skills = [
        {
            name: "JavaScript",
            icon: <Braces className="h-8 w-8 text-yellow-400" />,
        },
        {
            name: "TypeScript",
            icon: <FileJson className="h-8 w-8 text-blue-400" />,
        },
        {
            name: "React",
            icon: <Layers className="h-8 w-8 text-cyan-400" />,
        },
        {
            name: "Next.js",
            icon: <Globe className="h-8 w-8 text-white" />,
        },
        {
            name: "Tailwind CSS",
            icon: <Palette className="h-8 w-8 text-sky-400" />,
        },
        {
            name: "Shadcn UI",
            icon: <Box className="h-8 w-8 text-gray-300" />,
        },
        {
            name: "Framer Motion",
            icon: (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="h-8 w-8 flex items-center justify-center"
                >
                    <div className="h-5 w-5 bg-purple-400 rounded-sm" />
                </motion.div>
            ),
        },
        {
            name: "Node js",
            icon: <Server className="h-8 w-8 text-green-400" />,
        },
        {
            name: "Express",
            icon: <Box className="h-8 w-8 text-gray-400" />,
        },
        {
            name: "MongoDB",
            icon: <Database className="h-8 w-8 text-green-500" />,
        },
        {
            name: "PostgreSQL",
            icon: <Database className="h-8 w-8 text-blue-500" />,
        },
        {
            name: "Prisma",
            icon: <Box className="h-8 w-8 text-blue-400" />,
        },
        {
            name: "Docker",
            icon: <Cog className="h-8 w-8 text-blue-400" />,
        },
        {
            name: "Git",
            icon: <GitBranch className="h-8 w-8 text-orange-400" />,
        },
        {
            name: "GitHub",
            icon: <Github className="h-8 w-8 text-white" />,
        },
        {
            name: "Bash",
            icon: <Command className="h-8 w-8 text-gray-300" />,
        },
    ]

    return (
        <section className=" w-screen h-full bg-gradient-to-r py-2 from-black/95 to to-black text-white">
            <div className=" w-full h-full">
                <div className="p-10">
                    <h1 className="text-5xl font-sans tracking-tighter font-bold mb-2">My Tech Toolkit 🎨</h1>
                </div>

                <div className="grid grid-cols-4 px-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-4 w-screen">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-black rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800 aspect-square"
                        >
                            <div className="mb-3">{skill.icon}</div>
                            <h3 className="font-medium text-center text-white text-sm font-sans">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
                <div className="p-10 w-full flex justify-center font-sans">
                    <GitHubCalendar username="vineet-op" />
                </div>
            </div>
        </section>
    )
}

export default Skills