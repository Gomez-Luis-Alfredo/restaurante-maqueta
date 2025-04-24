import React, { useState } from 'react'
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-scroll'

export default function Header() {
    const [showMenu, setShowMenu] = useState()
    const handeleShowMenu = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
    return (
        <div className='fixed w-full z-10  top-0 '>
            <div className='container flex flex-row justify-between items-center p-2 bg-white shadow-md shadow-slate-500 rounded-br-md rounded-bl-md'>
                <div className=''>
                    <span><Link to={'/'} className='font-Lobster text-3xl font-bold'>Sibarita</Link></span>

                </div>

                <div className='gap-2 hidden md:flex '>
                    <nav className='hidden md:flex'>
                        <Link to='/' spy={true} smooth={true} duration={500} className='text-md  hover:bg-green-200 rounded-full m-2 px-2 cursor-pointer'>Inicio</Link>
                        <Link to='categoria' spy={true} smooth={true} duration={500} className='text-md  hover:bg-cyan-200 rounded-full m-2 px-2 cursor-pointer'>Categorias</Link>
                        <Link to='recetas' spy={true} smooth={true} duration={500} className='text-md  hover:bg-red-200 rounded-full m-2 px-2 cursor-pointer'>Recetas</Link>
                        <Link to='chef' spy={true} smooth={true} duration={500} className='text-md  hover:bg-blue-200 rounded-full m-2 px-2 cursor-pointer'>Chef</Link>
                        <Link to='post' spy={true} smooth={true} duration={500} className='text-md  hover:bg-rose-200 rounded-full m-2 px-2 cursor-pointer'>Post</Link>
                        <Link to='extras' spy={true} smooth={true} duration={500} className='text-md  hover:bg-stone-200 rounded-full m-2 px-2 cursor-pointer'>Extras</Link>
                        <Link to='contacto' spy={true} smooth={true} duration={500} className='text-md  hover:bg-purple-200 rounded-full m-2 px-2 cursor-pointer'>Contacto</Link>

                    </nav>
                </div>

                <div className='hidden  md:flex'>
                    <ul className='flex justify-center gap-2 items-center sm:hidden md:flex'>
                        <li><a href=""><FaFacebook className='text-xl text-black' /></a></li>
                        <li><a href=""><FaInstagramSquare className='text-xl text-black' /></a></li>
                        <li><a href=""><FaWhatsappSquare className='text-xl text-black' /></a></li>
                    </ul>
                </div>
                <button className='md:hidden sm:flex'>
                    <RxHamburgerMenu onClick={handeleShowMenu} className='size-[30px]' />
                </button>

            </div>

            {/*Menu responsive*/}
            <div className={`${showMenu ? 'sm:flex' : 'hidden'} 'sm:flex sm:flex-col md:hidden bg-white fixed top-0 left-0 z-50 w-[100%] h-[100%] '`}>

                <div className='flex justify-between items-center '><span><a href="" className='font-Lobster text-3xl font-bold m-3'>Sibarita</a></span> <button className='cursor-pointer m-3' onClick={handeleShowMenu}><IoMdClose className='size-[30px]' /></button></div>

                <div className='flex justify-center items-center  mt-8 '>
                    <nav className='flex flex-col  justify-center items-center'>
                        <Link to='/' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-4 m-3'>Inicio</Link>
                        <Link to='categoria' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Categorias</Link>
                        <Link to='recetas' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Recetas</Link>
                        <Link to='chef' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Chef</Link>
                        <Link to='post' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Post</Link>
                        <Link to='extras' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Extras</Link>
                        <Link to='contacto' spy={true} smooth={true} duration={500} onClick={handeleShowMenu} className='text-md hover:underline-offset-1 m-3'>Contacto</Link>
                    </nav>
                </div>
                <div>
                    <ul className='flex  justify-center gap-4 items-center mt-5'>
                        <li><a href=""><FaFacebook className='text-4xl text-black' /></a></li>
                        <li><a href=""><FaInstagramSquare className='text-4xl text-black' /></a></li>
                        <li><a href=""><FaWhatsappSquare className='text-4xl text-black' /></a></li>
                    </ul>

                </div>

            </div>



        </div>

    )
}
