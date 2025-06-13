"use client"

import type React from "react"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })
        if (isMenuOpen) setIsMenuOpen(false)
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        >
            <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 mx-auto">
                <div className="flex items-center">
                    <motion.a
                        href="#Contact"
                        onClick={scrollToContact}
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md group-hover:bg-emerald-400/30 transition-all duration-300"></span>
                        <span className="relative flex items-center gap-2 text-sm bg-gradient-to-r from-emerald-600 to-emerald-400 px-3 py-1 rounded-full font-medium text-white border border-emerald-500/50 shadow-lg">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Open to Work
                        </span>
                    </motion.a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 font-sans text-white/80">
                    <a href="#Home" className="text-sm hover:text-white transition-all duration-300 relative group">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400/70 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#Projects" className="text-sm hover:text-white transition-all duration-300 relative group">
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400/70 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#Skills" className="text-sm hover:text-white transition-all duration-300 relative group">
                        Skills
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400/70 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#Contact" className="text-sm hover:text-white transition-all duration-300 relative group">
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400/70 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-white p-2 relative z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/5"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="flex flex-col items-center py-4 space-y-4 font-sans text-white/80"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                            }}
                        >
                            {["Home", "Projects", "Skills", "Contact"].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-sm hover:text-white transition-colors w-full text-center py-2"
                                    onClick={toggleMenu}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: -20 },
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.div
                                className="w-full flex justify-center pt-2"
                                variants={{
                                    open: { opacity: 1, y: 0 },
                                    closed: { opacity: 0, y: -20 },
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.a
                                    href="#Contact"
                                    onClick={scrollToContact}
                                    className="relative group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md group-hover:bg-emerald-400/30 transition-all duration-300"></span>
                                    <span className="relative flex items-center gap-2 text-sm bg-gradient-to-r from-emerald-600 to-emerald-400 px-3 py-1 rounded-full font-medium text-white border border-emerald-500/50 shadow-lg">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Open to Work
                                    </span>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
