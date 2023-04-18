import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import Head from 'next/head'
// compponentes
import Header from '@/Components/header'
import Modal from '@/Components/modal'

// Features
import api from '@/Services/api'
import { getLinkeSavd,savelinks } from '@/Services/features'

export default function Home(){
  const [ link, setLink ] = useState<string>('')
  const [ data, setData ] = useState<any>({})
  const [ modal, setModal ] = useState<boolean>(false)
  async function submitLink(){
    try{
      const response = await api.post('/shorten',{
        long_url: link
      })
      savelinks('linksencurtados', response.data).then(()=>{
        setModal(true)
        setData(response.data)
      })
    }
    catch(erro){
      setLink('')
      // alert('Oops! parece que algo deu errado')
      alert(erro)
    }
  }
  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen'>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
        <div className='p-7 bg-zinc-50 rounded-3xl rounded-bl-none'>
            <Image src='/logo.png' height={100} width={100} alt='imagem de logo'/>
        </div>
        <h1  className='text-white font-bold mt-8 text-3xl'>Cairo links organization</h1>
        <h1  className='text-white font-normal mt-1 text-lg'>Cole o seu links aqui para encrutar</h1>
        <form className='bounce-2x  flex flex-col mt-8 items-center'>
            <div className='savvedlink px-2 flex items-center justify-between w-96 h-11 rounded-md  bg-slate-50 bg-opacity-5'>
                <FaLink className='mr-2' size={22} color='#fff'/>
                <input 
                  className=' bg-transparent text-white flex-1 h-full' 
                  type='url'
                  placeholder='Ensira a sua url aqui.....'
                  value={link}
                  onChange={(e)=>setLink(e.target.value)}
                />
            </div>
            <button type='button' onClick={submitLink} className='savvedlink hover:scale-95 transition-all h-11 w-96 mt-4 bg-white rounded-md font-bold'>Encurtar link</button>
        </form>
        
        <Modal linkNome={data} show={modal} />
    </div>
  )
}
