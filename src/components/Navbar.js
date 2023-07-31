"use client"
import NavButton from '@/components/NavButton'
import Image from 'next/image'
import { useState } from 'react'
import {TfiMenu} from "react-icons/tfi"
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='fixed bg-slate-500  z-[1000] w-full'>
        <nav id='nav' className='flex justify-between top-0 px-5 md:px-20 py-3 w-full items-center '>
      <div className='flex gap-4 items-center'>
        <div className='w-10 md:w-14 rounded-full overflow-hidden border-4 border-white'>
        <Image src="/logo.jpg" width="100" height="100" alt="logo"/>
      </div>
      <h1 className='font-medium text-lg md:text-xl'>MARTINS OLAWOLE</h1>
      </div>
      
      <div className='hidden md:flex gap-10'>
        <NavButton id = "hero">Home</NavButton>
        <NavButton id = "about">About</NavButton>
        <NavButton id = "portfolio">Projects</NavButton>
        <NavButton id = "contact">Contacts</NavButton>
      </div>
      <button onClick={()=>setOpenMenu(!openMenu)} className='text-2xl md:hidden'><TfiMenu/></button>
    </nav>
    <div className={`${openMenu ? "flex flex-col" : "hidden"} items-start gap-4 px-5 py-4`}>
        <NavButton id = "hero">Home</NavButton>
        <NavButton id = "about">About</NavButton>
        <NavButton id = "portfolio">Projects</NavButton>
        <NavButton id = "contact">Contacts</NavButton>
    </div>
    </div>
  )
}

export default Navbar