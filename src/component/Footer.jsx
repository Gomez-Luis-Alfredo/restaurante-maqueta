import React from 'react'
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='container mt-8 mb-4'>
            <div className='flex justify-between items-center'>
                <div><span><a href="" className='font-Lobster text-3xl font-bold'>Sibarita</a></span></div>
                <div className='gap-1'>
                    <nav className='flex' >
                        <a href="" className='text-sm hover:underline-offset-1 m-1'>Recetas</a>
                        <a href="" className='text-sm hover:underline-offset-1 m-1'>Blog</a>
                        <a href="" className='text-sm hover:underline-offset-1 m-1'>Contacto</a>
                        <a href="" className='text-sm hover:underline-offset-1 m-1'>Nosotros</a>
                    </nav>
                </div>
            </div>
                <div className='flex justify-center items-center gap-2'>
            
                <span>© 2025 creado por <span className='font-medium text-red-500'>Luis Gomez</span></span>
                    <ul className='flex justify-center gap-2 items-center hideen md:flex'>
                        <li><a href=""><FaFacebook className='text-xl text-black' /></a></li>
                        <li><a href=""><FaInstagramSquare className='text-xl text-black' /></a></li>
                        <li><a href=""><FaWhatsappSquare className='text-xl text-black' /></a></li>
                    </ul>
                </div>
            </div>
        
    )
}
