import Head from 'next/head';
import Link from 'next/link';

export default function NotFound404() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col">
        <Head>
            <title>404 | Pagina nao encontrada</title>
        </Head>
        <div className='flex items-center'>
            <strong className='text-white'>404</strong>
            <div className='mx-3 h-10 w-1 bg-zinc-50'></div>
            <span className='text-white'>Oops! Pagina não encontrada</span>
        </div>
        <Link href='/'>
            <button className='hover:px-20 transition-all mt-5 px-16 py-3 text-black font-bold bg-zinc-50 rounded-md'>
                Voltar para pagina inicial
            </button>
        </Link>
    </div>
  );
}
