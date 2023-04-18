import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaInstagram,FaGithub } from 'react-icons/fa'


export default function Header() {
  return (
    <div className=' absolute items-center right-10 top-3 flex gap-6'>
        <FaGithub className='hover:cursor-pointer' size={22} color='#fff'/>
        <FaLinkedin className='hover:cursor-pointer' size={22} color='#fff'/>
        <FaInstagram className='hover:cursor-pointer' size={22} color='#fff'/>
        <Link href="/links">
            <button className='hover:scale-90 transition-all text-black font-bold  px-3 py-1 bg-zinc-50 rounded-md'>
                Meus links
            </button>
        </Link>
    </div>
  )
}
