import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineCopy, AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  linkNome: { link:string, long_url:string };
  show: boolean;
}

export default function Modal({ linkNome, show }: ModalProps) {
  const [tempoRestante, setTempoRestante] = useState(15);
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (show) {
      intervalId = setInterval(() => {
        setTempoRestante((prevTempoRestante) => prevTempoRestante - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [show]);

  useEffect(() => {
    if (tempoRestante === 0) {
      setShowModal(false);
      setTimeout(() => {
        window.location.href = '/';
    }, 1000);
}
}, [tempoRestante]);
function restart(){
    setShowModal(false);
    setTempoRestante(15);
    window.location.href = '/';

  }
  useEffect(() => {
    setShowModal(show);
    setTempoRestante(15);
  }, [show]);
  async function copiar(){
    await navigator.clipboard.writeText(linkNome.link)
    alert("Link copiado")
  }
  return (
    <div
      className={`${
        showModal ? 'amimation' : 'hide'
      } transition-all flex flex-col modal p-5 rounded-md absolute bottom-4 bg-gray-50`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-xl">Link encurtado</h1>
        <button onClick={restart}>
            <AiOutlineClose size={24} />
        </button>
      </div>
      <span className="opacity-80 font-semibold text-sm mt-4 max-w-xs overflow-hidden whitespace-nowrap">
        {linkNome.long_url}
      </span>
      <button className="mt-6 btn flex p-3 justify-between rounded-md">
        <span className="text-white overflow-hidden whitespace-nowrap">{linkNome.link}</span>
        <AiOutlineCopy onClick={copiar} className='ml-3' color="#fff" size={22} />
      </button>
      <progress
        value={tempoRestante}
        max={15}
        className="rounded-xl progress absolute bottom-0 h-2 w-full left-0"
      />
    </div>
  );
}
