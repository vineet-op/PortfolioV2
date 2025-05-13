import { Mail } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (

        <nav className='flex justify-between items-center w-screen gap-5 p-8'>
            <div className='text-white flex gap-5'>
                <Mail className='text-sm size-5' />
                <div className='font-sans text-muted text-sm'>
                    vineetworks29@gmail.com
                </div>
            </div>

            <div className=' flex gap-8 font-sans text-muted'>
                <a href="Projects" className=' text-sm'>Projects</a>
                <a href="" className=' text-sm'>About Me</a>
                <a href="" className=' text-sm'>Experience</a>
                <a href="" className=' text-sm'>Contact</a>
            </div>
        </nav>


    )
}

export default Navbar
