import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Menulink from '@/Components/menulink'
import Head from 'next/head'
// featuers
import { getLinkeSavd } from '@/Services/features'

// types
interface mylinkprop {
  link: string,
  long_url: string
}

export default function Links() {
  const [links, setLinks] = useState<mylinkprop[]>([])

  async function GetLinks() {
    const todoslinks =  await getLinkeSavd('linksencurtados').then((dadods)=>{
      setLinks(dadods)
      
    })
  }
  useEffect(()=>{
    GetLinks()
  },[links])
  return (
    <div className='flex-col w-screen h-screen flex items-center mt-10'>
      <Head>
        <title>Meus Links</title>
      </Head>
      <div className='flex items-start flex-col'>
        <div className='flex justify-start flex-row gap-6 items-center'>
          <Link href='/'>
            <FaArrowLeft className='hover:cursor-pointer mt-2' size={30} color='#fff'/>
          </Link>
          <h1 className='text-white text-4xl'>Meus links</h1>
        </div>
        <div className='flex flex-col mt-8'>
          {
            links.map((link,i)=>(
              <Menulink key={i} linkname={link.link}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
