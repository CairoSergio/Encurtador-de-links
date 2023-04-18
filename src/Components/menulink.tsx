import React from 'react'
import {FaLink, FaTrash } from 'react-icons/fa'
interface Linkprops{
    linkname: string
}

export default function Menulink({linkname}:Linkprops) {
  return (
    <div className='py-4 flex items-center gap-3 flex-row justify-between'>
        <div className='savvedlink flex-row px-2 flex items-center h-11 rounded-md bg-slate-50 bg-opacity-20'>
            <FaLink className='mr-2' size={22} color='#fff'/>
            <span className='text-white overflow-hidden'>{linkname}</span>
        </div>
        <FaTrash className='hover:cursor-pointer' size={22} color='#ff0000'/>
  </div>
  )
}
